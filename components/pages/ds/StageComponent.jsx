import Container from "@mui/material/Container";
import { Link } from "@nextui-org/link";
import Typography from "@mui/material/Typography";
import {
  Timeline,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
} from "@mui/lab";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineConnector from "@mui/lab/TimelineConnector";
import { Fade } from "react-awesome-reveal";

export default function StageComponent({ stageData }) {
  return (
    <Container className="flex flex-col gap-3">
      <h1>{stageData.title}</h1>
      <Fade triggerOnce duration={1500} direction="left">
        <Timeline
          className="flex flex-col items-center gap-4"
          position="alternate-reverse"
        >
          {stageData.details.map((detail, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="flex flex-col items-start">
                  <Link
                    href={detail.link}
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      className="link-hover"
                    >
                      {detail.title}
                    </Typography>
                  </Link>
                  <Typography className="text-left" variant="body1" paragraph>
                    {detail.content}
                  </Typography>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Fade>
    </Container>
  );
}
