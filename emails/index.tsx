import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface CleaningSubmissionTemplateProps {
  contactInfo: {
    fullname: string;
    email: string;
    phone: string;
    address: string;
    services: any[];
    date: string;
    comments: string;
  };
}

const CleaningSubmissionTemplate = ({
  contactInfo,
}: CleaningSubmissionTemplateProps) => {
  const { fullname, email, phone, address, date, services, comments } =
    contactInfo;

  const formatValue = (value: string) =>
    value?.trim() ? value : "Not Provided";

  return (
    <Html>
      <Head />
      <Preview>New Cleaning Submission!</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite py-8 text-base font-sans">
          <Container className="bg-white p-45">
            <Heading className="my-0 leading-8">
              Cleaning Submission Received
            </Heading>

            <Section>
              <Row>
                <Text className="text-xl font-bold pt-4">Name</Text>
                <Text className="bg-zinc-100 px-2 py-2 rounded-md tracking-wider">
                  {formatValue(fullname)}
                </Text>
                <Text className="text-xl font-bold pt-4">Email</Text>
                <Text className="bg-zinc-100 px-2 py-2 rounded-md tracking-wider">
                  {formatValue(email)}
                </Text>
                <Text className="text-xl font-bold pt-4">Phone</Text>
                <Text className="bg-zinc-100 px-2 py-2 rounded-md tracking-wider">
                  {formatValue(phone)}
                </Text>
                <Text className="text-xl font-bold pt-4">Address</Text>
                <Text className="bg-zinc-100 px-2 py-2 rounded-md tracking-wider">
                  {formatValue(address)}
                </Text>
                <Text className="text-xl font-bold pt-4">Comments</Text>
                <Text className="bg-zinc-100 px-2 py-2 rounded-md tracking-wider">
                  {formatValue(comments)}
                </Text>
                <Text className="text-xl font-bold pt-4">Date</Text>
                <Text className="bg-zinc-100 px-2 py-2 rounded-md tracking-wider">
                  {formatValue(new Date(date).toDateString())}
                </Text>
                <Text className="text-xl font-bold pt-4">Services</Text>
                <Text className="bg-zinc-100 px-2 py-2 rounded-md tracking-wider">
                  {formatValue(services.join(", ").toString())}
                </Text>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default CleaningSubmissionTemplate;
