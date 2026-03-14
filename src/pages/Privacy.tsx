import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h1 className="text-4xl font-extrabold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10">Last updated: 1 March 2025</p>

          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">

            <h2 className="text-xl font-bold text-foreground mt-8">1. Introduction</h2>
            <p>
              NextGen Intelligence (Pty) Ltd ("NextGen Intelligence", "we", "us", or "our") operates the
              NextGen AI Platform, a multi-tenant software-as-a-service system that enables restaurants
              and service businesses to automate customer interactions through WhatsApp. We are committed
              to protecting the privacy and personal information of all individuals who interact with our
              platform, including business operators, their staff, and their end customers.
            </p>
            <p>
              This Privacy Policy explains what information we collect, how we use it, how we protect it,
              and what rights you have in relation to your personal data. It applies to all users of our
              website (<a href="https://nextgenintelligence.co.za" className="text-primary hover:underline">nextgenintelligence.co.za</a>),
              our business dashboards, staff applications, and our WhatsApp-integrated messaging services.
            </p>
            <p>
              We comply with the Protection of Personal Information Act, 2013 (POPIA) of South Africa,
              and we respect the data protection requirements of Meta Platforms, Inc. as they apply to
              WhatsApp Business API integrations.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">2. Information We Collect</h2>

            <h3 className="text-lg font-semibold text-foreground mt-4">2.1 Business Operators and Staff</h3>
            <p>When a business is onboarded to the NextGen AI Platform, we collect:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Business name, address, phone number, and operating hours</li>
              <li>Owner and manager names, email addresses, and login credentials (passwords are stored in hashed form only — we never store plaintext passwords)</li>
              <li>Staff names and hashed PIN codes for authentication</li>
              <li>Menu items, pricing, descriptions, and images uploaded to the platform</li>
              <li>Order data including order numbers, items, totals, and status history</li>
              <li>Platform usage metrics such as message counts, AI usage, and order volumes</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-4">2.2 End Customers (WhatsApp Users)</h3>
            <p>
              When an end customer sends a WhatsApp message to a business that uses our platform, we receive
              and process the following data as provided by the WhatsApp Business API:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>WhatsApp phone number (wa_id) and display name from the user's WhatsApp profile</li>
              <li>Message content sent by the customer to the business</li>
              <li>Message metadata including timestamps and message identifiers</li>
              <li>Any information the customer voluntarily provides during the ordering process, such as their name, delivery address, or phone number</li>
            </ul>
            <p>
              We do not access a customer's WhatsApp contact list, photos, location data, or any information
              beyond what is transmitted through the WhatsApp Business API in the course of a conversation
              with the business.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-4">2.3 Website Visitors</h3>
            <p>When you visit our marketing website, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Information you provide through our contact form (name, email, message)</li>
              <li>Standard web server logs including IP address, browser type, and pages visited</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8">3. How We Use Your Information</h2>
            <p>We use collected information for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-foreground">Service delivery:</strong> Processing orders, managing menus, enabling customer-business communication through WhatsApp, and operating the business dashboard and staff applications.</li>
              <li><strong className="text-foreground">Authentication and security:</strong> Verifying user identities, managing login sessions, and protecting accounts from unauthorised access.</li>
              <li><strong className="text-foreground">Customer support:</strong> Responding to enquiries from business operators and resolving technical issues.</li>
              <li><strong className="text-foreground">Platform improvement:</strong> Analysing usage patterns in aggregate to improve service reliability and develop new features.</li>
              <li><strong className="text-foreground">Billing and account management:</strong> Managing subscriptions, enforcing usage limits, and processing payments.</li>
              <li><strong className="text-foreground">Legal compliance:</strong> Meeting our obligations under POPIA, the Electronic Communications and Transactions Act, and other applicable laws.</li>
            </ul>
            <p>
              We do not use end customer data for advertising, profiling, or any purpose unrelated to
              the services requested by the business that the customer is communicating with.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">4. WhatsApp Data and Meta Compliance</h2>
            <p>
              Our platform integrates with the WhatsApp Business API provided by Meta Platforms, Inc.
              In this capacity:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>We act as a technology provider operating under a single WhatsApp Business Account (WABA) on behalf of our client businesses.</li>
              <li>We only send messages to customers who have initiated a conversation with the business or have provided explicit opt-in consent.</li>
              <li>We do not send unsolicited bulk messages, broadcast marketing, or spam of any kind.</li>
              <li>We honour customer opt-out requests immediately — when a customer sends "STOP" or similar keywords, we cease all automated messaging to that customer.</li>
              <li>We validate all inbound webhook payloads using HMAC SHA-256 signature verification to ensure data integrity and authenticity.</li>
              <li>WhatsApp access tokens are stored exclusively in server environment variables and are never written to the database or included in log output.</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8">5. Data Storage and Security</h2>
            <p>
              All data is stored in secured PostgreSQL databases hosted on infrastructure with encryption
              at rest and in transit. We implement the following security measures:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>All passwords and PINs are hashed using bcrypt before storage</li>
              <li>API access is controlled through JWT-based authentication with short-lived access tokens</li>
              <li>Role-based access control (RBAC) ensures users can only access data belonging to their business</li>
              <li>Multi-tenant data isolation prevents any cross-business data access</li>
              <li>Access tokens and secrets are masked in all application logs</li>
              <li>HTTPS is enforced on all endpoints</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8">6. Data Sharing</h2>
            <p>We do not sell, rent, or trade personal information to third parties. We may share data only in the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-foreground">With the business operator:</strong> End customer data (order details, messages, phone numbers) is accessible to the business that the customer has chosen to communicate with.</li>
              <li><strong className="text-foreground">Service providers:</strong> We use third-party infrastructure providers (database hosting, server hosting) who process data on our behalf under strict data processing agreements.</li>
              <li><strong className="text-foreground">Meta Platforms:</strong> Message data transits through the WhatsApp Business API infrastructure as required for the messaging service to function.</li>
              <li><strong className="text-foreground">Payment processors:</strong> Billing data is processed through Stripe for subscription management. We do not store credit card details on our servers.</li>
              <li><strong className="text-foreground">Legal requirements:</strong> We may disclose information where required by law, court order, or regulatory authority.</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8">7. Data Retention</h2>
            <p>
              We retain business operator and staff data for the duration of the active subscription and
              for a period of 12 months after account closure for record-keeping and dispute resolution purposes.
            </p>
            <p>
              End customer conversation data and order records are retained for the business operator's
              benefit and are subject to the business's own data retention requirements. Businesses can
              export their data at any time through the platform's export functionality.
            </p>
            <p>
              Upon request, we will delete personal data within 30 days, subject to any legal obligations
              that require us to retain certain records.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">8. Your Rights</h2>
            <p>Under POPIA and applicable data protection law, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information (see our <a href="/data-deletion" className="text-primary hover:underline">Data Deletion</a> page)</li>
              <li>Object to the processing of your personal information in certain circumstances</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Lodge a complaint with the Information Regulator of South Africa</li>
            </ul>
            <p>
              End customers who wish to exercise their rights regarding data held by a specific business
              should contact that business directly. We will assist businesses in fulfilling these requests.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">9. Cookies</h2>
            <p>
              Our marketing website uses only essential cookies required for site functionality. Our
              business dashboards use authentication tokens stored in browser local storage for session
              management. We do not use third-party tracking cookies or advertising pixels.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">10. Children's Privacy</h2>
            <p>
              Our services are intended for use by businesses and their adult representatives. We do not
              knowingly collect personal information from children under the age of 18. If we become aware
              that we have inadvertently collected data from a child, we will take steps to delete it promptly.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Material changes will be communicated
              to business operators through the platform dashboard and via email. The "Last updated" date
              at the top of this page indicates when the policy was last revised.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">12. Contact Us</h2>
            <p>For any privacy-related enquiries, data access requests, or complaints, please contact us at:</p>
            <p className="mt-2">
              <strong className="text-foreground">NextGen Intelligence (Pty) Ltd</strong><br />
              Email: <a href="mailto:info@nextgenintelligence.co.za" className="text-primary hover:underline">info@nextgenintelligence.co.za</a><br />
              Phone: <a href="tel:+27837866021" className="text-primary hover:underline">083 786 6021</a><br />
              Location: Durban, KwaZulu-Natal, South Africa
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
