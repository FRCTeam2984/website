import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FlexBox, FlexItem } from "../components/Helpers/flexBox"

import SponsorWrapper from "../components/Helpers/sponsorWrapper"
import AceHardware from "../images/sponsors/AceHardware.svg"
import CopyCove from "../images/sponsors/CopyCove.svg"
import DiniGroup from "../images/sponsors/DiniGroup.svg"
import Kiwanis from "../images/sponsors/Kiwanis.svg"
import LockheedMartin from "../images/sponsors/LockheedMartin.svg"
import Monsanto from "../images/sponsors/Monsanto.svg"
import Perkins from "../images/sponsors/Perkins.svg"
import PerkinsCoie from "../images/sponsors/PerkinsCoie.svg"
import QFS from "../images/sponsors/QFS.svg"
import Qualcomm from "../images/sponsors/Qualcomm.svg"
import SolidWorks from "../images/sponsors/SolidWorks.svg"
import Sperr from "../images/sponsors/Sperr.svg"
import Verance from "../images/sponsors/Verance.svg"
import Wowee from "../images/sponsors/Wowee.svg"
import Xerox from "../images/sponsors/Xerox.svg"

import Button from "../components/Helpers/button"
import { TextLinkStyle, LinkStyle } from "../components/Helpers/linkStyle"
import { Link } from "gatsby"

const Sponsors = () => (
  <Layout>
    <SEO title="Sponsors" />
    <div
      id="our-sponsors"
      css={{
        textAlign: "center",
        "& svg": {
          width: "100%",
          height: "auto",
        },
      }}
    >
      <h1>Our Sponsors</h1>
      <LinkStyle>
        <Link to="/sponsors#become-a-sponsor">
          <Button margin="25px auto">Become a Sponsor</Button>
        </Link>
      </LinkStyle>
      <p css={{ fontSize: "1.2em" }}>Thank you for your support!</p>
      <FlexBox alignItems="center">
        <FlexItem flex="1">
          <SponsorWrapper href="https://www.acehardware.com/">
            <AceHardware />
          </SponsorWrapper>
        </FlexItem>
        <FlexItem flex="1">
          <SponsorWrapper href="https://www.copycove.com/">
            <CopyCove />
          </SponsorWrapper>
        </FlexItem>
        <FlexItem flex="1">
          <SponsorWrapper href="https://www.dinigroup.com/">
            <DiniGroup />
          </SponsorWrapper>
        </FlexItem>
      </FlexBox>

      <FlexBox alignItems="center">
        <FlexItem flex="1">
          <SponsorWrapper href="https://www.kiwanis.org/">
            <Kiwanis />
          </SponsorWrapper>
        </FlexItem>
        <FlexItem flex="1">
          <SponsorWrapper href="https://www.lockheedmartin.com/">
            <LockheedMartin />
          </SponsorWrapper>
        </FlexItem>
        <FlexItem flex="1">
          <SponsorWrapper href="https://monsanto.com/">
            <Monsanto />
          </SponsorWrapper>
        </FlexItem>
      </FlexBox>

      <FlexBox alignItems="center">
        <FlexItem flex="1">
          <SponsorWrapper href="https://www.perkins.com/">
            <Perkins />
          </SponsorWrapper>
        </FlexItem>
        <FlexItem flex="1">
          <SponsorWrapper href="https://www.perkinscoie.com/">
            <PerkinsCoie />
          </SponsorWrapper>
        </FlexItem>
        <FlexItem flex="1">
          <SponsorWrapper href="http://www.quasarfs.com/">
            <QFS />
          </SponsorWrapper>
        </FlexItem>
      </FlexBox>
      <FlexBox alignItems="center">
        <FlexItem flex="1">
          <SponsorWrapper href="https://www.qualcomm.com/">
            <Qualcomm />
          </SponsorWrapper>
        </FlexItem>
        <FlexItem flex="1">
          <SponsorWrapper href="https://www.solidworks.com/">
            <SolidWorks />
          </SponsorWrapper>
        </FlexItem>
        <FlexItem flex="1">
          <SponsorWrapper>
            <Sperr />
          </SponsorWrapper>
        </FlexItem>
      </FlexBox>
      <FlexBox alignItems="center">
        <FlexItem flex="1">
          <SponsorWrapper href="https://www.verance.com/">
            <Verance />
          </SponsorWrapper>
        </FlexItem>
        <FlexItem flex="1">
          <SponsorWrapper href="https://wowwee.com/">
            <Wowee />
          </SponsorWrapper>
        </FlexItem>
        <FlexItem flex="1">
          <SponsorWrapper href="https://www.xerox.com/">
            <Xerox />
          </SponsorWrapper>
        </FlexItem>
      </FlexBox>
    </div>
    <div
      id="become-a-sponsor"
      css={{
        paddingTop: "75px",
      }}
    >
      <h1>Become A Sponsor</h1>
      <h3>Why Support Us?</h3>
      <p>
        Vikings Robotics is dependent on donations from people like you! We
        promise to follow our mission statement and help future scientists and
        engineers make the world a better place.
      </p>
      <h3>How Your Donation Will Help Us</h3>
      <ul>
        <li>Registration for Competitions</li>
        <li>Parts for the Robot</li>
        <li>Transportation Costs</li>
        <li>Purchasing New Equipment / Repairing Old Equipment</li>
      </ul>
      <h2>Ways To Contribute</h2>
      <h3>Become a Mentor</h3>
      <p>
        If you are interested in becoming a mentor, please contact us at{" "}
        <TextLinkStyle>
          <a href="mailto:ljhsvikingrobotics@gmail.com">
            ljhsvikingrobotics@gmail.com
          </a>
        </TextLinkStyle>
        .
      </p>
      <h3>Donate Money</h3>
      <p>
        Donations are made via the 501c(3) non-profit LJHS Foundation and are
        tax deductible.
      </p>

      <FlexBox>
        <FlexItem flex="1">
          <h4>Card</h4>
          <p css={{ paddingRight: "1.2em" }}>
            Make sure to select the Robotics Team from the dropdown menu of
            academic departments.
          </p>
          <LinkStyle>
            <a href="https://www.foundationofljhs.com/donate-to-academics.html#roboticsteam">
              <Button>Donate</Button>
            </a>
          </LinkStyle>
        </FlexItem>
        <FlexItem flex="1">
          <h4>Check</h4>
          <p css={{ paddingRight: "1.2em" }}>
            Make Checks Payable To:<br></br>
            The Foundation of La Jolla High School (RE:Robotics Club)<br></br>
            Mail Checks To:<br></br>
          </p>
          <Button>
            La Jolla High School<br></br>
            Attn: Dick Fatcock<br></br>
            750 Nautilus St.<br></br>
            La Jolla, CA 92037
          </Button>
        </FlexItem>
        <FlexItem flex="1">
          <h4>Become a Corporate Sponsor</h4>
          <p>
            Your logo will be added to the list of our corporate sponsors.
            <br></br>
            Please contact us for more information at{" "}
            <LinkStyle>
              <a href="mailto:ljhsvikingrobotics@gmail.com">
                ljhsvikingrobotics@gmail.com
              </a>
            </LinkStyle>
          </p>
        </FlexItem>
      </FlexBox>
    </div>
  </Layout>
)

export default Sponsors
