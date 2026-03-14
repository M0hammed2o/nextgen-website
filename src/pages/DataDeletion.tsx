import Layout from "@/components/Layout";

const DataDeletion = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h1 className="text-4xl font-extrabold mb-2">User Data Deletion</h1>
          <p className="text-muted-foreground mb-10">Last updated: 1 March 2025</p>

          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">

            <h2 className="text-xl font-bold text-foreground mt-8">Your Right to Data Deletion</h2>
            <p>
              NextGen Intelligence (Pty) Ltd ("NextGen Intelligence") respects your right to control
              your personal data. In accordance with the Protection of Personal Information Act (POPIA)
              and Meta's data handling requirements, you may request the deletion of personal data
              that we hold about you.
            </p>
            <p>
              This page explains how different categories of users can request data deletion and what
              to expect during the process.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">For WhatsApp End Customers</h2>
            <p>
              If you have communicated with a business that uses the NextGen AI Platform through WhatsApp
              and you would like your data deleted, you have two options:
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-4">Option 1: Opt Out via WhatsApp</h3>
            <p>
              Send the word <strong className="text-foreground">STOP</strong> to the business's WhatsApp number.
              This will immediately stop all automated messaging to your number from that business. Your
              opted-out status will be recorded, and no further messages will be sent by the platform.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-4">Option 2: Submit a Deletion Request</h3>
            <p>
              To request the complete deletion of your data from our systems, please email us at{" "}
              <a href="mailto:info@nextgenintelligence.co.za" className="text-primary hover:underline">
                info@nextgenintelligence.co.za
              </a>{" "}
              with the subject line <strong className="text-foreground">"Data Deletion Request"</strong> and include
              the following information:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your full name</li>
              <li>The phone number you used to communicate via WhatsApp (including country code)</li>
              <li>The name of the business you communicated with (if known)</li>
              <li>A brief description of what data you would like deleted</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-4">What We Will Delete</h3>
            <p>Upon receiving and verifying a valid deletion request, we will delete:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your customer record (display name, phone number, WhatsApp ID)</li>
              <li>Conversation session data and context</li>
              <li>Message history associated with your WhatsApp ID</li>
              <li>Any personal details you provided during the ordering process (name, address, phone)</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-4">What We May Retain</h3>
            <p>
              In certain cases, we may be required to retain limited data for legitimate business or legal
              purposes. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Completed order records with personal identifiers removed (anonymised), which may be retained for the business's financial and accounting records</li>
              <li>Aggregated, non-identifiable usage statistics</li>
              <li>Records that we are legally required to maintain under South African tax or business law</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8">For Business Operators and Staff</h2>
            <p>
              If you are a business owner, manager, or staff member and wish to have your account and
              associated data deleted:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-foreground">Staff members:</strong> Ask your business owner or manager
                to deactivate your account through the staff management section of the dashboard. This
                disables your login immediately.
              </li>
              <li>
                <strong className="text-foreground">Business owners:</strong> Contact us at{" "}
                <a href="mailto:info@nextgenintelligence.co.za" className="text-primary hover:underline">
                  info@nextgenintelligence.co.za
                </a>{" "}
                to request account closure and data deletion. We will export your data if requested and
                then proceed with deletion.
              </li>
            </ul>
            <p>
              Upon business account closure, all associated data — including staff accounts, menu data,
              order history, customer records, and conversation logs — will be deleted within 30 days
              following a 30-day grace period for data export.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">Processing Timeline</h2>
            <p>
              We will acknowledge your deletion request within <strong className="text-foreground">5 business days</strong> and
              complete the deletion within <strong className="text-foreground">30 days</strong> of verification.
              We will notify you by email once the deletion has been completed.
            </p>
            <p>
              If we require additional information to verify your identity or locate the relevant data,
              we will contact you within the acknowledgement period.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">Meta / Facebook Data Deletion Callback</h2>
            <p>
              If you connected to a business on our platform through a Facebook or Instagram integration,
              you may also initiate a data deletion request through your Facebook account settings. We
              support Meta's data deletion callback protocol and will process these requests automatically.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8">Contact</h2>
            <p>For all data deletion requests and related enquiries:</p>
            <p className="mt-2">
              <strong className="text-foreground">NextGen Intelligence (Pty) Ltd</strong><br />
              Email: <a href="mailto:info@nextgenintelligence.co.za" className="text-primary hover:underline">info@nextgenintelligence.co.za</a><br />
              Phone: <a href="tel:+27837866021" className="text-primary hover:underline">083 786 6021</a><br />
              Location: Durban, KwaZulu-Natal, South Africa
            </p>
            <p className="mt-4">
              If you are not satisfied with our response to your request, you have the right to lodge a
              complaint with the{" "}
              <a
                href="https://inforegulator.org.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Information Regulator of South Africa
              </a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DataDeletion;
