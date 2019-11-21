import React from "react"
import { colors } from "../theme"
import Container from "../container"
import ExternalLink from "./externalLink"
import ExternalLinkIcon from "./externalLinkIcon"
import { FaGithub, FaDiscord } from "react-icons/fa"

const Footer = () => (
  <footer
    style={{
      backgroundColor: colors.lightlightgray,
      border: "1px solid " + colors.lightgray,
      borderTopStyle: "solid",
      borderRightStyle: "none",
      borderBottomStyle: "none",
      borderLeftStyle: "none",
      marginBottom: "auto",
      height: "200px",
    }}
  >
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "25px",
        }}
      >
        <div
          style={{
            flex: 1,
          }}
        >
          <h3
            style={{
              marginBottom: "20px",
            }}
          >
            Contact Us
          </h3>
          <div>750 Nautilus St., La Jolla, CA 92037</div>
          <div>
            <ExternalLink href="mailto:ljhsvikingrobotics@gmail.com">
              ljhsvikingrobotics@gmail.com
            </ExternalLink>
          </div>
        </div>
        <div
          style={{
            flex: 1,
          }}
        >
          <h3
            style={{
              marginBottom: "20px",
            }}
          >
            Join Us
          </h3>
          <div>
            <ExternalLinkIcon
              href="https://github.com/FRCTeam2984"
              size="32px"
              marginRight="10px"
            >
              <FaGithub />
            </ExternalLinkIcon>
            <ExternalLinkIcon
              href="https://discordapp.com/invite/RshDdxa"
              size="32px"
            >
              <FaDiscord />
            </ExternalLinkIcon>
          </div>
        </div>
        <div
          style={{
            flex: 1,
          }}
        >
          <h3
            style={{
              marginBottom: "20px",
            }}
          >
            Support Us
          </h3>
          <div>
            <ExternalLink href="https://thefoundationoflajollahigh.formstack.com/forms/academic_donation">
              <div
                style={{
                  width: "75px",
                  textAlign: "center",
                  padding: "3px",
                  borderWidth: "1px",
                  borderStyle: "solid",
                }}
              >
                Donate
              </div>
            </ExternalLink>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "45px",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} Vikings Robotics
      </div>
    </Container>
  </footer>
)

export default Footer
