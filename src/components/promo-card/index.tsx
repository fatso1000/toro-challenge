import { Box, Button, Typography } from "@mui/material";

export default function PromoCard({ url }: { url: string | undefined }) {
  return (
    <Box
      gap={2}
      className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg border-8 text-black"
      sx={{ maxWidth: 450, borderColor: "rgba(97, 214, 182, 1)" }}
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{
          color: "rgba(97, 214, 182, 1)",
        }}
        className="font-bold mb-4 text-center"
      >
        <strong>WATCH NEW MOVIES FOR FREE!</strong>
      </Typography>
      <Typography variant="body1" className="text-center mb-2">
        Watch any movies online for free without ads!
      </Typography>
      <Typography variant="body1" className="text-center mb-6">
        Have fun watching your favourite movies!
      </Typography>
      <Button
        component="a"
        href={url}
        target="_blank"
        variant="contained"
        fullWidth
        className="hover:bg-orange-700 mt-3 text-white font-bold px-6 py-2 rounded-lg"
        sx={{ textTransform: "uppercase", background: "rgba(236, 86, 50, 1)" }}
      >
        Watch Here!
      </Button>
    </Box>
  );
}
