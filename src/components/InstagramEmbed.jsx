import { useEffect } from "react";

const InstagramEmbed = () => {
  useEffect(() => {
    // Carrega o script de embed do Instagram
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 bg-[#f8f5f2] border border-[#e8dbc5] rounded-2xl shadow-sm">
      <h2 className="text-3xl font-bold text-[#57201c] mb-8 text-center tracking-wide">
        Instagram do Escritório
      </h2>

      <div className="w-full bg-white border border-[#e2d4bc] rounded-xl shadow-sm p-4">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/steinntz_advogados/?utm_source=ig_embed"
          data-instgrm-version="14"
          style={{
            background: "#fff",
            border: 0,
            margin: 0,
            padding: 0,
            width: "100%",
          }}
        ></blockquote>
      </div>
    </section>
  );
};

export default InstagramEmbed;
