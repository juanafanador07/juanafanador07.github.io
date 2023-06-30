export default function Image({ src, alt, className }) {
  return src && typeof src !== "string" ? (
    <picture>
      {src.map((e, i) => {
        if (i === src.length - 1) {
          return (
            <img
              className={className ? className : ""}
              alt={alt ? alt : ""}
              src={e.src}
              sizes={e.sizes ? e.sizes : ""}
              srcSet={e.srcset}
              type={e.type}
              key={i}
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
      className={className ? className : ""}
      alt={alt ? alt : ""}
      src={src}
    ></img>
  );
}
