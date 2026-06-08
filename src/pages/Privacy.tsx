const Privacy = () => (
  <div className="py-16 md:py-24">
    <div className="container mx-auto px-4 max-w-3xl prose-invert">
      <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Privacy Policy
      </h1>
      <p className="text-sm text-muted-foreground mb-10">
        Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">1. Introduction</h2>
          <p>
            BIYU AI Agency ("we", "us", "our") is committed to protecting the privacy and personal data of our clients,
            applicants, and website visitors. This Privacy Policy explains how we collect, use, store, disclose and
            protect your personal information in accordance with the{" "}
            <strong className="text-foreground">Data Protection Act, 2018 (Act No. 32 of 2018) of the Republic of Botswana</strong>,
            and, where applicable, the EU General Data Protection Regulation (GDPR) and other international data
            protection standards.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">2. Data Controller</h2>
          <p>
            BIYU AI Agency, based in Gaborone and Francistown, Botswana, is the data controller responsible for your
            personal data. Contact: <span className="text-foreground">info.biyu.ai@gmail.com</span>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">3. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Identification data: full name, email address, phone number.</li>
            <li>Professional data: CV/resume, employment history, skills, portfolio links (for applicants).</li>
            <li>Business data: company name, industry, project requirements (for clients).</li>
            <li>Communications: messages submitted via contact and application forms.</li>
            <li>Technical data: IP address, device type, browser, and basic analytics from website usage.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">4. Lawful Basis for Processing</h2>
          <p>Under Section 21 of the Data Protection Act, 2018, we process personal data only where we have a lawful basis:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li><strong className="text-foreground">Consent</strong> — when you submit a form or subscribe.</li>
            <li><strong className="text-foreground">Contractual necessity</strong> — to deliver services or process applications.</li>
            <li><strong className="text-foreground">Legitimate interest</strong> — to operate, secure and improve our services.</li>
            <li><strong className="text-foreground">Legal obligation</strong> — to comply with Botswana law.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">5. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To respond to enquiries and deliver requested services.</li>
            <li>To assess job applications and consulting requests.</li>
            <li>To send updates, proposals or relevant business communications.</li>
            <li>To improve our website, content and service quality.</li>
            <li>To comply with legal, regulatory and contractual obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">6. Data Sharing & Disclosure</h2>
          <p>
            We do not sell your personal data. We may share data with trusted processors strictly for service delivery
            (e.g. email providers such as EmailJS, workflow automation via n8n, hosting providers, and our backend
            infrastructure). All processors are bound by confidentiality and data protection obligations consistent
            with the Data Protection Act, 2018.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">7. International Data Transfers</h2>
          <p>
            Where personal data is transferred outside Botswana, we ensure such transfers comply with Sections 48–49 of
            the Data Protection Act, 2018, and that adequate safeguards (such as Standard Contractual Clauses or
            equivalent measures) are in place.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">8. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfil the purposes for which it was collected,
            including any legal, accounting or reporting requirements. Application data is typically retained for up
            to 24 months, after which it is securely deleted or anonymised.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">9. Your Rights</h2>
          <p>Under the Data Protection Act, 2018 (Sections 27–36), you have the right to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate or incomplete data.</li>
            <li>Request erasure ("right to be forgotten") where applicable.</li>
            <li>Object to or restrict processing.</li>
            <li>Withdraw consent at any time.</li>
            <li>Request data portability.</li>
            <li>Lodge a complaint with the{" "}
              <strong className="text-foreground">Information and Data Protection Commission of Botswana</strong>.
            </li>
          </ul>
          <p className="mt-2">To exercise any of these rights, email <span className="text-foreground">info.biyu.ai@gmail.com</span>.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">10. Data Security</h2>
          <p>
            We apply appropriate technical and organisational measures — including encryption in transit (HTTPS), access
            controls, role-based permissions, secure cloud infrastructure and Row-Level Security on our databases — to
            protect personal data against unauthorised access, loss or disclosure, as required under Section 25 of the
            Act.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">11. Cookies & Analytics</h2>
          <p>
            Our website may use essential cookies and basic analytics to understand site usage. You can disable cookies
            in your browser settings; some site features may not work as expected.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">12. Children's Data</h2>
          <p>
            Our services are not directed to individuals under 18. We do not knowingly collect personal data from
            minors. If you believe a minor has provided us with data, please contact us for immediate deletion.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">13. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The "Last updated" date above reflects the most recent
            revision. Continued use of our services after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">14. Contact</h2>
          <p>
            BIYU AI Agency<br />
            Gaborone & Francistown, Botswana<br />
            Email: <span className="text-foreground">info.biyu.ai@gmail.com</span>
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default Privacy;
