/**
 * Footer band: the designed sheet (public/footer.webp) runs edge to edge
 * inside the frame, scaling fluidly from desktop to mobile. All the
 * information the old text footer carried — name, role, team, and the
 * "starting estimates" disclaimer — is preserved in the alt text and
 * mirrored by the pricing footnote on the page.
 */
export function Footer() {
  return (
    <footer className="border-t-[3px] border-ink">
      {/*
        Relative src on purpose: the site is served under the /contactus
        basePath, and next/image does not prefix basePath for unoptimized
        images, so an absolute /footer.webp would 404 on GitHub Pages.
        A relative URL resolves against the page and follows the basePath.
      */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="footer.webp"
        alt="Alchie Andilab — Web, Mobile & Systems Developer, Manila, PH. Team: Alchie Andilab · Luel Cabaltera · Reece Salon. Prices are starting estimates; final scope and quote are confirmed after discovery."
        width={1859}
        height={846}
        decoding="async"
        className="block h-auto w-full"
      />
    </footer>
  );
}
