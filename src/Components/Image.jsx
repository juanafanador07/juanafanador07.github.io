export default function Image({
  src,
  alt = "",
  className = "",
  width = "",
  height = "",
}) {
  return src && typeof src !== "string" ? (
    <picture>
      {src.map((e, i) => {
        if (i === src.length - 1) {
          return (
            <img
              className={className}
              alt={alt}
              src={e.src}
              sizes={e.sizes ? e.sizes : ""}
              srcSet={e.srcset}
              type={e.type}
              key={i}
              width={width}
              height={height}
            ></img>
          );
        }

        return (
          <source
            srcSet={e.srcset}
            sizes={e.sizes ? e.sizes : ""}
            type={e.type}
            key={i}
          ></source>
        );
      })}
    </picture>
  ) : (
    <img
      className={className}
      alt={alt}
      src={src}
      width={width}
      height={height}
    ></img>
  );
}
