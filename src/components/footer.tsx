/**
 * Footer band: the designed sheet (public/footer.webp) runs edge to edge
 * inside the frame at full width, cropped to half its natural height for a
 * shorter band. All the information the old text footer carried - name,
 * role, team, and the "starting estimates" disclaimer - is preserved in the
 * alt text and mirrored by the pricing footnote on the page.
 */
export function Footer() {
  return (
    <footer className="border-t-[3px] border-ink">
      {/*
        Relative src on purpose: the site is served under the /contactus
        basePath, and next/image does not prefix basePath for unoptimized
        images, so an absolute /footer.webp would 404 on GitHub Pages.
        A relative URL resolves against the page and follows the basePath.

        The wrapper pins the aspect at 1859 / 423 - exactly half the image's
        natural height at the same width - and object-cover center-crops the
        artwork into it, so the band is 50% shorter without distortion.
      */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "1859 / 423" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="footer.webp"
          alt="Alchie Andilab - Web, Mobile & Systems Developer, Manila, PH. Team: Alchie Andilab · Luel Cabaltera · Reece Salon. Prices are starting estimates; final scope and quote are confirmed after discovery."
          width={1859}
          height={846}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </footer>
  );
}
