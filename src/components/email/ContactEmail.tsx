import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Row,
  Column,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

export const ContactEmail: React.FC<ContactEmailProps> = ({
  name,
  email,
  inquiryType,
  message,
}) => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Body style={main}>
        <Container style={container}>
          {/* Header with gradient background */}
          <Section style={headerGradient}>
            <Heading style={h1}>New Contact Form Submission</Heading>
            <Text style={subtitle}>
              You have received a new message from your portfolio contact form
            </Text>
          </Section>

          {/* Contact Details Card */}
          <Section style={cardContainer}>
            <Row>
              <Column>
                <div style={cardHeader}>
                  <div style={iconContainer}>
                    <div style={icon}>👤</div>
                  </div>
                  <Heading style={h2}>Contact Details</Heading>
                </div>
                <div style={detailGrid}>
                  <div style={detailItem}>
                    <Text style={label}>Name</Text>
                    <Text style={value}>{name}</Text>
                  </div>
                  <div style={detailItem}>
                    <Text style={label}>Email</Text>
                    <Text style={value}>{email}</Text>
                  </div>
                  <div style={detailItem}>
                    <Text style={label}>Inquiry Type</Text>
                    <Text style={value}>{inquiryType}</Text>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Message Card */}
          <Section style={cardContainer}>
            <Row>
              <Column>
                <div style={cardHeader}>
                  <div style={iconContainer}>
                    <div style={icon}>💬</div>
                  </div>
                  <Heading style={h2}>Message</Heading>
                </div>
                <div style={messageContainer}>
                  <Text style={messageText}>{message}</Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <div style={footerContent}>
              <Text style={footerText}>
                This message was sent from your portfolio contact form
              </Text>
              <Text style={timestamp}>{new Date().toLocaleString()}</Text>
            </div>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f8fafc",
  fontFamily:
    '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontWeight: "400",
  lineHeight: "1.6",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
};

const container = {
  margin: "0 auto",
  padding: "0",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
  borderRadius: "24px",
  overflow: "hidden",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
};

const headerGradient = {
  padding: "48px 32px",
  textAlign: "center" as const,
  background: "linear-gradient(135deg, #0551FA 0%, #3B82F6 100%)",
  color: "#ffffff",
};

const h1 = {
  color: "#ffffff",
  fontSize: "36px",
  fontWeight: "800",
  margin: "0 0 16px 0",
  padding: "0",
  lineHeight: "1.1",
  letterSpacing: "-0.025em",
  fontFamily:
    '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const h2 = {
  color: "#111827",
  fontSize: "22px",
  fontWeight: "700",
  margin: "0",
  padding: "0",
  lineHeight: "1.2",
  letterSpacing: "-0.015em",
  fontFamily:
    '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const subtitle = {
  color: "#e0e7ff",
  fontSize: "18px",
  margin: "0",
  fontWeight: "500",
  fontFamily:
    '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const cardContainer = {
  padding: "32px",
  backgroundColor: "#ffffff",
  margin: "0",
  borderBottom: "1px solid #f1f5f9",
};

const cardHeader = {
  display: "flex",
  alignItems: "center",
  marginBottom: "24px",
  gap: "16px",
};

const iconContainer = {
  width: "48px",
  height: "48px",
  borderRadius: "12px",
  backgroundColor: "#f0f9ff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid #e0f2fe",
};

const icon = {
  fontSize: "24px",
  lineHeight: "1",
};

const detailGrid = {
  display: "grid",
  gap: "20px",
};

const detailItem = {
  padding: "20px",
  backgroundColor: "#f8fafc",
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
};

const label = {
  color: "#64748b",
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  margin: "0 0 8px 0",
  fontFamily:
    '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const value = {
  color: "#111827",
  fontSize: "16px",
  fontWeight: "500",
  margin: "0",
  fontFamily:
    '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const messageContainer = {
  padding: "24px",
  backgroundColor: "#f8fafc",
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
};

const messageText = {
  color: "#111827",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
  fontWeight: "400",
  fontFamily:
    '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const footer = {
  padding: "32px",
  textAlign: "center" as const,
  backgroundColor: "#f8fafc",
};

const footerContent = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "8px",
};

const footerText = {
  color: "#64748b",
  fontSize: "14px",
  margin: "0",
  fontWeight: "500",
  fontFamily:
    '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const timestamp = {
  color: "#94a3b8",
  fontSize: "12px",
  margin: "0",
  fontWeight: "400",
  fontFamily:
    '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

export default ContactEmail;
