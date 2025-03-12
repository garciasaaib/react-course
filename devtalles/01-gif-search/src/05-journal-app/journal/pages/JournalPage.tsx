import { VolumeDown, VolumeUp } from "@mui/icons-material"
import { Button, Slider, Stack, Typography } from "@mui/material"
import { useState } from "react";

export const JournalPage = () => {
  const [value, setValue] = useState<number>(30);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <div>
      <Typography variant="h1">Journal Page</Typography>
      <Button>Hello world</Button>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
  <VolumeDown />
  <Slider aria-label="Volume" value={value} onChange={handleChange} />
  <VolumeUp />
</Stack>


    </div>
  )
}
