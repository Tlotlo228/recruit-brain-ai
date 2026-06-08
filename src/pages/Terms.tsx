const Terms = () => (
  <div className="py-16 md:py-24">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Terms of Service
      </h1>
      <p className="text-sm text-muted-foreground mb-10">
        Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">1. Agreement</h2>
          <p>
            These Terms of Service govern your use of the BIYU AI Agency website and services. By accessing our site,
            submitting a form, or engaging our services, you agree to these Terms. If you do not agree, please do not
            use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">2. Services</h2>
          <p>
            BIYU AI Agency provides AI automation, consulting and mentorship services. Specific deliverables, timelines
            and fees are set out in a separate written engagement letter or proposal between the parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">3. Client Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide accurate and complete information.</li>
            <li>Cooperate in a timely manner with required inputs and approvals.</li>
            <li>Comply with all applicable laws of the Republic of Botswana.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">4. Intellectual Property</h2>
          <p>
            All website content, branding and materials are the property of BIYU AI Agency unless otherwise stated.
            Deliverables produced under a paid engagement transfer to the client upon full payment, subject to BIYU
            retaining rights to underlying tools, frameworks and know-how.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">5. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential any non-public information shared during an engagement. This
            obligation survives termination of the engagement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by Botswana law, BIYU AI Agency shall not be liable for indirect,
            incidental, special or consequential damages arising from use of our website or services. Our total
            liability under any engagement is limited to the fees paid by the client for that engagement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">7. Data Protection</h2>
          <p>
            Our handling of personal data is governed by our Privacy Policy and complies with the Data Protection Act,
            2018 of the Republic of Botswana.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">8. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the Republic of Botswana. Any disputes shall be resolved in the
            courts of Botswana, unless otherwise agreed in writing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">9. Contact</h2>
          <p>
            For questions about these Terms, contact us at <span className="text-foreground">info.biyu.ai@gmail.com</span>.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default Terms;
