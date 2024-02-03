import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "../../../components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../../../components/misc/Buttons";
import EmailIllustrationSrc from "../../../images/email-illustration.svg";
import HubspotContactForm from "../hubspot/Contactform.js";


// const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Container =  styled.div`
${tw`relative -mx-8 -mt-8 bg-center bg-cover `}
background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%233C0D99' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23A273FF' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%239f6fff' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%239c6aff' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%239966ff' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%239561ff' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23925dff' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%238f58ff' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%238b53ff' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23884eff' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%238449ff' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%238144ff' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%237d3fff' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23793aff' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%237534ff' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%23712dff' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%236d27ff' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23691fff' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%236415FF' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");`;


const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-white`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8 bg-black `

export default ({
  subheading = "Contact Us",
  heading = <>Feel free to <span tw="text-white">get in touch</span><wbr/> with us.</>,
  description = "For more information about Smartfalcon, get in touch with us and we assure you that all your queries will be taken care of.",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            {/* <Form action={formAction} method={formMethod}>
              <Input type="email" name="email" placeholder="Your Email Address" />
              <Input type="text" name="name" placeholder="Full Name" />
              <Input type="text" name="subject" placeholder="Subject" />
              <Textarea name="message" placeholder="Your Message Here" />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form> */}
                <HubspotContactForm
                  region="na1"
                  portalId="44235887"
                  formId="b2504fa9-a511-4700-afb1-5e70004d2fb5"/>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
