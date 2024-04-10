import {
    Body,
    Column,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
    Row,
  } from "@react-email/components";
  import * as React from "react";
  
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export interface TayoEmailProps {
    firstName: string,
    email: string,
    phoneNumber: string,
    message: string
  }
  export const ContactTemplate = ({
    firstName, 
  }: TayoEmailProps) => (
    <Html>
      <Head />
      <Preview>Stack overflow tips for searching</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img width={146} style={logoImage} src={`https://files.fm/thumb_show.php?i=2vavsexggb`} />
          </Section>
  
          <Section style={header}>
            <Row>
              <Column style={headerContent}>
                <Heading style={headerContentTitle}>
                 TAYO <span>FÖRENING</span>
                </Heading>
                <Text style={headerContentSubtitle}>
                En person har nått ut via Tayos hemsida.
                </Text>
              </Column>
              <Column style={headerImageContainer}>
                <Img
                  style={headerImage}
                  width={240}
                  src={`https://scontent.farn2-2.fna.fbcdn.net/v/t39.30808-6/337101003_945602849781637_7223727344269817698_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tBRprQcwYEQAb6NM1q4&_nc_ht=scontent.farn2-2.fna&oh=00_AfDuMm-S8rWpY39XOZnLDD7X2SDK71dvvCLab6NBb5Qb6Q&oe=661BF9A4`} />
              </Column>
            </Row>
          </Section>
  
          <Section style={content}>
            <Heading as="h2" style={title}>
             Användaren har skickat följande:
            </Heading>
  
            <Hr style={divider} />
  
  <Heading as="h2" style={title}>
    Du kan alltid svara från denna mail genom att klicka svara eller reply:
  </Heading>
  <Text style={paragraph}>
    Namn: Abdullahi
  </Text>
  <Text style={paragraph}>
    Mail: qaskaxaji@gmail.com
  </Text>
  <Text style={paragraph}>
    Telefonnummer: 070707007
  </Text>

  <Text style={paragraph}>
  Meddelande:
  <Text style={{...rectangleStyle }}>
  Att ge stöd till nyanlända med integration och att lära sig språket är vårt uppdrag. Att ge stöd till nyanlända med integration och att lära sig språket är vårt uppdrag.
  </Text>
  </Text>

            <Hr style={divider} />
  
            <Heading as="h2" style={title}>
            Tayos mål är att kvalificera dig under din resa......,  
            </Heading>
            <br />
  
            <Section style={buttonContainer}>
              <Link style={button} href="www.tayoforening.se">
                Besök Hemsidan
              </Link>
            </Section>
          </Section>
        </Container>
  
        {/* <Section style={footer}>
          <Text style={footerText}>
            You're receiving this email because your Stack Overflow activity
            triggered this tip or reminder.
          </Text>
  
          <Link href="/" style={footerLink}>
            Unsubscribe from emails like this{" "}
          </Link>
          <Link href="/" style={footerLink}>
            Edit email settings{" "}
          </Link>
          <Link href="/" style={footerLink}>
            Contact us
          </Link>
          <Link href="/" style={footerLink}>
            Privacy
          </Link>
  
          <Hr style={footerDivider} />
  
          <Img width={111} src={`${baseUrl}/static/stack-overflow-logo-sm.png`} />
          <Text style={footerAddress}>
            <strong>Stack Overflow</strong>, 110 William Street, 28th Floor, New
            York, NY 10038
          </Text>
          <Text style={footerHeart}>{"<3"}</Text>
        </Section> */}
      </Body>
    </Html>
  );
  
  
  const main = {
    backgroundColor: "#f3f3f5",
    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  };
  
  const headerContent = { padding: "20px 30px 15px" };
  
  const headerContentTitle = {
    color: "#fff",
    fontSize: "27px",
    fontWeight: "bold",
    lineHeight: "27px",
  };
  
  const headerContentSubtitle = {
    color: "#fff",
    fontSize: "17px",
  };
  
  const headerImageContainer = {
    padding: "30px 10px",
  };
  
  const headerImage = {
    maxWidth: "100%",
  };
  
  const title = {
    margin: "0 0 15px",
    fontWeight: "bold",
    fontSize: "21px",
    lineHeight: "21px",
    color: "#0c0d0e",
  };
  
  const paragraph = {
    fontSize: "15px",
    lineHeight: "21px",
    color: "#3c3f44",
  };
  
  const rectangleStyle = {
    display: "flex",
    minHeight: "80px",
    width: "100%",
    maxWidth: "400px",
    borderRadius: "4px",
    border: "1px solid #E2E8F0",
    backgroundColor: "#F7FAFC",
    padding: "0.75rem",
    outline: "none",
    ringOffsetColor: "#F7FAFC",
    placeholderColor: "#A0AEC0",
    ringColor: "#4299E1",
    ringOffsetWidth: "2px",
    whiteSpace: "pre-line",
    // overflowWrap: "break-word"
};
  const divider = {
    margin: "30px 0",
  };
  
  const container = {
    width: "680px",
    maxWidth: "100%",
    margin: "0 auto",
    backgroundColor: "#ffffff",
  };
  
  const footer = {
    width: "680px",
    maxWidth: "100%",
    margin: "32px auto 0 auto",
    padding: "0 30px",
  };
  
  const content = {
    padding: "30px 30px 40px 30px",
  };
  
  const logo = {
    display: "flex",
    background: "#f3f3f5",
    padding: "20px 30px",
  };
  
  const logoImage = {
        borderRadius: "10px",
  };
  const header = {
    borderRadius: "5px 5px 0 0",
    display: "flex",
    flexDireciont: "column",
    backgroundColor: "#06444d",
  };
  
  const buttonContainer = {
    marginTop: "24px",
    display: "block",
  };
  
  const button = {
    backgroundColor: "#0095ff",
    border: "1px solid #0077cc",
    fontSize: "17px",
    lineHeight: "17px",
    padding: "13px 17px",
    borderRadius: "4px",
    maxWidth: "120px",
    color: "#fff",
  };
  
  const footerDivider = {
    ...divider,
    borderColor: "#d6d8db",
  };
  
  const footerText = {
    fontSize: "12px",
    lineHeight: "15px",
    color: "#9199a1",
    margin: "0",
  };
  
  const footerLink = {
    display: "inline-block",
    color: "#9199a1",
    textDecoration: "underline",
    fontSize: "12px",
    marginRight: "10px",
    marginBottom: "0",
    marginTop: "8px",
  };
  
  const footerAddress = {
    margin: "4px 0",
    fontSize: "12px",
    lineHeight: "15px",
    color: "#9199a1",
  };
  
  const footerHeart = {
    borderRadius: "1px",
    border: "1px solid #d6d9dc",
    padding: "4px 6px 3px 6px",
    fontSize: "11px",
    lineHeight: "11px",
    fontFamily: "Consolas,monospace",
    color: "#e06c77",
    maxWidth: "min-content",
    margin: "0 0 32px 0",
  };
  