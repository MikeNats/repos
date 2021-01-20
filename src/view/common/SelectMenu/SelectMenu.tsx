import { Button, Menu, MenuItem, Box, Typography } from "@material-ui/core";
import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useStyles } from "./styles";

const SelectMenu = ({
  handleMenuClick,
  anchorEl,
  setValue,
  defaultButtonValue,
  ariaName,
  menuItems,
  className,
  label,
  value,
}: {
  handleMenuClick: (e: React.MouseEvent<HTMLElement>) => void;
  anchorEl: null | HTMLElement;
  defaultButtonValue?: string;
  setValue: (e: React.ChangeEvent<any>) => void;
  ariaName: string;
  label?: string;
  menuItems: { attr: any; name: string }[];
  value: string | number;
  className?: string | undefined;
}) => {
  const { menuButton, menuButtonIcon, menuButtonNav, menuLabel } = useStyles();
  return (
    <Box className={className}>
      {label && (
        <Typography className={menuLabel} variant="h5">
          {label}
        </Typography>
      )}
      <Button
        aria-controls={`${ariaName}-menu`}
        aria-haspopup="true"
        onClick={handleMenuClick}
        className={menuButton}
      >
        {defaultButtonValue ? defaultButtonValue : value}
        <ArrowDropDownIcon className={menuButtonIcon} />
      </Button>
      <Menu
        id={`${ariaName}-menu`}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={setValue}
      >
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.attr}
            className={menuButtonNav}
            data-attr={menuItem.attr}
            onClick={setValue}
          >
            {menuItem.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default React.memo(SelectMenu);
