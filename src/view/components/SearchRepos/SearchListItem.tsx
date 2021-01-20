import React from "react";
import { Box } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StarsIcon from "@material-ui/icons/Stars";
import { RepoType } from "../../../model/Repo";
import { useStyles } from "./styles";

const SearchList = ({ repo }: { repo: RepoType }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const {
    accordion,
    accordionSummary,
    accordionTitle,
    starsContainer,
    starsIcon,
    starsCout,
    accordionDetails,
    accordionDescriptionTitle,
    accordionDescription,
    accordionSummarySubContainer,
  } = useStyles();
  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      className={accordion}
      expanded={expanded === `panel${repo.id}`}
      onChange={handleChange(`panel${repo.id}`)}
    >
      <AccordionSummary
        className={accordionSummary}
        style={{
          borderBottom: expanded ? "1px solid #ddd" : "none",
        }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${repo.id}-content`}
        id={`panel${repo.id}-header`}
      >
        <Box className={accordionSummarySubContainer}>
          <Typography className={accordionTitle}>{repo.name}</Typography>
          <Box className={starsContainer}>
            <StarsIcon className={starsIcon} />
            <Typography className={starsCout}>
              {repo.stargazers_count}
            </Typography>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails className={accordionDetails}>
        <Typography className={accordionDescriptionTitle}>
          Description:
        </Typography>
        <Typography className={accordionDescription}>
          {repo.description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default React.memo(SearchList);
