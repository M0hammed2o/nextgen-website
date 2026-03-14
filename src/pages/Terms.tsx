import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h1 className="text-4xl font-extrabold mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-10">Last updated: 1 March 2025</p>

          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">

            <h2 className="text-xl font-bold text-foreground mt-8">1. Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between you and
              NextGen Intelligence (Pty) Ltd ("NextGen Intelligence", "we", "us", or "our"), governing
              your access to and use of the NextGen AI Platform, including all associated websites,
              dashboards, staff applications, APIs, and WhatsApp integration services (collectively,
              the "Service").
            </p>
            <p>
              By creating an account, accessing the Service, or using any part of the platform, you
              acknowledge that you have read, understood, and agree to be bound by these Terms. If you
              are using the Service on behalf of a business or organisation, you represent that you have
              the authority to bind that entity to these Terms.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">2. Description of Service</h2>
            <p>
              The NextGen AI Platform is a multi-tenant software-as-a-service system that enables
              restaurants and service businesses to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Receive and process customer orders through WhatsApp using AI-assisted automation</li>
              <li>Manage menus, pricing, specials, and business configuration through a web dashboard</li>
              <li>Track and manage orders in real time through staff-facing applications</li>
              <li>View business analytics including revenue, order volumes, and customer activity</li>
              <li>Manage staff accounts and access controls</li>
            </ul>
            <p>
              The Service operates through the WhatsApp Business API provided by Meta Platforms, Inc.
              and is subject to Meta's own terms of service and usage policies in addition to these Terms.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">3. Account Registration and Security</h2>
            <p>
              Business accounts are created by NextGen Intelligence during the onboarding process.
              You are responsible for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Maintaining the confidentiality of all login credentials, including email passwords and staff PINs</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorised access to your account</li>
              <li>Ensuring that staff members who are granted access use the platform appropriately</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate accounts that we reasonably believe are
              compromised or being used in violation of these Terms.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">4. Acceptable Use</h2>
            <p>You agree not to use the Service to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Send unsolicited bulk messages, spam, or marketing broadcasts through WhatsApp</li>
              <li>Harass, threaten, or abuse end customers or any other person</li>
              <li>Transmit unlawful, fraudulent, defamatory, or harmful content</li>
              <li>Attempt to gain unauthorised access to other businesses' data or accounts</li>
              <li>Circumvent usage limits, rate controls, or security mechanisms</li>
              <li>Use the platform for any purpose that violates applicable law, including the Protection of Personal Information Act (POPIA), the Consumer Protection Act, or Meta's WhatsApp Business Policy</li>
              <li>Resell, sublicense, or redistribute access to the platform without our prior written consent</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8">5. WhatsApp Messaging Compliance</h2>
            <p>
              As a user of the platform's WhatsApp integration, you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>You will only communicate with customers who have initiated a conversation with your business or provided explicit opt-in consent</li>
              <li>You will promptly honour opt-out requests from customers</li>
              <li>You will not use the platform to send template messages for marketing purposes unless the customer has specifically opted in to receive marketing communications</li>
              <li>You are responsible for the content of messages sent through your business's WhatsApp number, including AI-generated responses</li>
              <li>Violations of Meta's WhatsApp Business Policy may result in immediate suspension of your WhatsApp integration and potentially your entire account</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8">6. Subscription and Billing</h2>
            <p>
              Access to the Service is provided on a monthly subscription basis. Pricing, included usage
              allowances, and payment terms are agreed upon during onboarding and documented in your
              service agreement. Key billing terms:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>All prices are quoted in South African Rand (ZAR) unless otherwise specified</li>
              <li>Subscription fees are billed monthly in advance</li>
              <li>Usage beyond included allowances (messages, AI calls, orders) may incur additional charges as defined in your plan</li>
              <li>We may suspend access to the Service if payment is overdue by more than 14 days</li>
              <li>You may cancel your subscription with 30 days' written notice</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8">7. Data Ownership and Responsibility</h2>
            <p>
              You retain ownership of all business data, menu content, customer information, and order
              records that you create or collect through the Service. We process this data on your behalf
              to provide the Service and do not claim any ownership rights over it.
            </p>
            <p>
              You are responsible for ensuring that your collection and use of customer data complies
              with applicable data protection laws, including POPIA. This includes obtaining any necessary
              consents and providing appropriate privacy notices to your customers.
            </p>
            <p>
              You may export your data at any time through the platform's export functionality. Upon
              termination of your subscription, we will retain your data for 30 days to allow for
              export, after which it will be scheduled for deletion.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">8. Intellectual Property</h2>
            <p>
              The NextGen AI Platform, including all software, algorithms, designs, documentation, and
              branding, is the intellectual property of NextGen Intelligence (Pty) Ltd. Your subscription
              grants you a non-exclusive, non-transferable licence to use the Service for the duration
              of your subscription period.
            </p>
            <p>
              You may not copy, modify, reverse engineer, decompile, or create derivative works from
              any part of the platform without our prior written consent.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">9. Service Availability and Support</h2>
            <p>
              We strive to maintain high availability of the Service but do not guarantee uninterrupted
              access. We may perform scheduled maintenance with reasonable advance notice. We will make
              commercially reasonable efforts to resolve technical issues in a timely manner.
            </p>
            <p>
              The Service relies on third-party infrastructure including WhatsApp Business API, database
              hosting, and payment processing. We are not liable for outages or disruptions caused by
              third-party service providers.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>NextGen Intelligence shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, data, or business opportunities</li>
              <li>Our total aggregate liability for any claims arising from or related to the Service shall not exceed the total fees paid by you in the 3 months preceding the event giving rise to the claim</li>
              <li>We do not guarantee the accuracy, completeness, or reliability of AI-generated responses and you acknowledge that the AI chatbot may occasionally produce incorrect information</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8">11. Suspension and Termination</h2>
            <p>
              We may suspend or terminate your access to the Service immediately if:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>You breach these Terms or your service agreement</li>
              <li>You violate Meta's WhatsApp Business Policy</li>
              <li>Your account is used for fraudulent or illegal activity</li>
              <li>Payment is overdue and remains unpaid after notice</li>
            </ul>
            <p>
              You may terminate your subscription by providing 30 days' written notice to
              <a href="mailto:info@nextgenintelligence.co.za" className="text-primary hover:underline"> info@nextgenintelligence.co.za</a>.
              Upon termination, your access to the Service will cease and your data will be handled
              in accordance with our Privacy Policy.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">12. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless NextGen Intelligence, its directors, employees,
              and agents from any claims, damages, losses, or expenses arising from your use of the
              Service, your violation of these Terms, or your violation of any third-party rights.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">13. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the Republic of
              South Africa. Any disputes arising from these Terms or the Service shall be subject to the
              exclusive jurisdiction of the courts of KwaZulu-Natal, South Africa.
            </p>
            <p>
              Before pursuing formal legal action, both parties agree to attempt to resolve disputes through
              good-faith negotiation for a period of at least 30 days.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">14. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Material changes will be communicated
              to active subscribers via email and through the platform dashboard at least 14 days before
              taking effect. Continued use of the Service after changes take effect constitutes acceptance
              of the revised Terms.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">15. Contact</h2>
            <p>For questions about these Terms, please contact us at:</p>
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

export default Terms;
