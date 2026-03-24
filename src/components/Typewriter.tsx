import React, { useEffect, useMemo, useState } from 'react';

type TypewriterProps = {
  text: string;
  cursor?: string;
  speed?: number; // ms per char
  totalDuration?: number | null; // if provided, overrides speed (ms total for full text)
  startDelay?: number; // ms before typing starts
  className?: string;
  disabled?: boolean; // when true, render text instantly
  highlight?: { match: string; className?: string } | null;
  // new: segments allow per-part durations and styling
  segments?: Array<{ text: string; duration?: number; className?: string }> | null;
  interSegmentDelay?: number; // ms pause between segments
};

const Typewriter: React.FC<TypewriterProps> = ({ text, cursor = '|', speed = 30, totalDuration = null, startDelay = 300, className, disabled = false, highlight = null, segments = null, interSegmentDelay = 50 }) => {
  const [index, setIndex] = useState<number>(0);
  // for segmented mode
  const [segIndex, setSegIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [showCursor, setShowCursor] = useState(true);

  const prefersReduced = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (disabled || prefersReduced) {
      // render everything instantly
      setIndex(text.length);
      setSegIndex((segments && segments.length > 0) ? segments.length - 1 : 0);
      setCharIndex((segments && segments.length > 0) ? segments[segments.length - 1].text.length : text.length);
      return;
    }

    if (segments && segments.length > 0) {
      // segmented typing
      setIndex(0);
      setSegIndex(0);
      setCharIndex(0);
      let running = true;

      const startTimer = setTimeout(() => {
        const advanceSegment = (sIdx: number) => {
          if (!running) return;
          const seg = segments[sIdx];
          const segLen = Math.max(1, seg.text.length);
          const msPerChar = seg.duration && seg.duration > 0 ? Math.max(6, Math.floor(seg.duration / segLen)) : speed;

          const id = setInterval(() => {
            setCharIndex((ci) => {
              if (!running) {
                clearInterval(id);
                return ci;
              }
              if (ci >= seg.text.length) {
                clearInterval(id);
                // after finishing this segment, either move to next after interSegmentDelay or finish
                if (sIdx + 1 < segments.length) {
                  setTimeout(() => {
                    setSegIndex(sIdx + 1);
                    setCharIndex(0);
                    advanceSegment(sIdx + 1);
                  }, interSegmentDelay);
                } else {
                  // finished all segments
                  setIndex(text.length);
                }
                return ci;
              }
              return ci + 1;
            });
          }, msPerChar);
        };

        // start first segment
        advanceSegment(0);
      }, startDelay);

      return () => {
        running = false;
        clearTimeout(startTimer);
      };
    }

    // fallback: simple full-text typing
    const msPerChar = totalDuration && totalDuration > 0 ? Math.max(8, Math.floor(totalDuration / Math.max(1, text.length))) : speed;

    const startTimer = setTimeout(() => {
      const id = setInterval(() => {
        setIndex((i) => {
          if (i >= text.length) {
            clearInterval(id);
            return text.length;
          }
          return i + 1;
        });
      }, msPerChar);

      return () => clearInterval(id);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [text, speed, totalDuration, startDelay, disabled, prefersReduced, segments, interSegmentDelay]);

  useEffect(() => {
    const t = setInterval(() => setShowCursor((v) => !v), 500);
    return () => clearInterval(t);
  }, []);

  const renderWithHighlight = () => {
    // segmented rendering
    if (segments && segments.length > 0) {
      const parts: React.ReactNode[] = [];
      for (let i = 0; i < segments.length; i++) {
        const seg = segments[i];
        const displayed = i < segIndex ? seg.text : (i === segIndex ? seg.text.slice(0, charIndex) : '');
        // render each character in its own span for per-char animation
        const segLen = seg.text.length || 1;
        const msPerChar = seg.duration && seg.duration > 0 ? Math.max(6, Math.floor(seg.duration / segLen)) : speed;
        // use exact msPerChar for per-letter animation duration so every letter uses same time
        const chars = displayed.split('').map((ch, ci) => (
          <span
            key={`${i}-${ci}`}
            className={`tw-char ${seg.className || ''}`}
            style={{ animationDuration: `${msPerChar}ms`, animationTimingFunction: 'linear' }}
          >
            {ch}
          </span>
        ));
        parts.push(<span key={i} className={seg.className}>{chars}</span>);
      }
      return parts;
    }

    // non-segmented: keep previous highlight-aware rendering
    if (!highlight || !highlight.match) return text.slice(0, index);
    const match = highlight.match;
    const start = text.indexOf(match);
    if (start === -1) return text.slice(0, index);

    if (index <= start) {
      // haven't reached highlighted segment yet
      return text.slice(0, index);
    }

    const before = text.slice(0, start);
    const highlightedPortion = text.slice(start, Math.min(index, start + match.length));
    const after = index > start + match.length ? text.slice(start + match.length, index) : '';

    return (
      <>
        {before}
        <span className={highlight.className} aria-hidden>
          {highlightedPortion}
        </span>
        {after}
      </>
    );
  };

    return (
      <span className={className} aria-live={disabled || prefersReduced ? 'polite' : 'off'}>
        {renderWithHighlight()}
        {(showCursor && (segments && segments.length > 0 ? segIndex < (segments.length) : index < text.length)) ? (
          <span className="tw-cursor" aria-hidden>{cursor}</span>
        ) : null}
      </span>
    );
};

export default Typewriter;
