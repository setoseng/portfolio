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
  projectType: string;
  message: string;
}

export const ContactEmail: React.FC<ContactEmailProps> = ({
  name,
  email,
  projectType,
  message,
}) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>New Contact Form Submission</Heading>
            <Text style={subtitle}>
              You have received a new message from your portfolio contact form
            </Text>
          </Section>

          <Section style={content}>
            <Row>
              <Column>
                <Heading style={h2}>Contact Details</Heading>
                <Text style={text}>
                  <strong>Name:</strong> {name}
                </Text>
                <Text style={text}>
                  <strong>Email:</strong> {email}
                </Text>
                <Text style={text}>
                  <strong>Project Type:</strong> {projectType}
                </Text>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section style={content}>
            <Row>
              <Column>
                <Heading style={h2}>Message</Heading>
                <Text style={messageText}>{message}</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section style={footer}>
            <Text style={footerText}>
              This message was sent from your portfolio contact form at{" "}
              {new Date().toLocaleString()}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "600px",
};

const header = {
  padding: "20px 0",
  textAlign: "center" as const,
};

const h1 = {
  color: "#0551FA",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const h2 = {
  color: "#333",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "20px 0",
  padding: "0",
};

const subtitle = {
  color: "#666",
  fontSize: "14px",
  margin: "0",
};

const content = {
  padding: "20px",
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
  margin: "20px 0",
};

const text = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "8px 0",
};

const messageText = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "8px 0",
  whiteSpace: "pre-wrap" as const,
};

const hr = {
  borderColor: "#dfe1e4",
  margin: "42px 0",
};

const footer = {
  padding: "20px 0",
  textAlign: "center" as const,
};

const footerText = {
  color: "#666",
  fontSize: "12px",
  margin: "0",
};

export default ContactEmail;
