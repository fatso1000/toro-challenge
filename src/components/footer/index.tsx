import { Box, Link } from "@mui/material";

function Footer() {
  return (
    <Box display="inline-flex" gap={2} sx={{ color: "#888888" }}>
      <Link href="#" color="inherit" underline="hover" className="!font-bold">
        Privacy Policy
      </Link>
      <Link href="#" color="inherit" underline="hover" className="!font-bold">
        Terms of Use
      </Link>
    </Box>
  );
}

export default Footer;
