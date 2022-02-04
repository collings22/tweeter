
import TextField from "@mui/material/TextField";

export default function TweetInput({ handleOnInputChange }) {

    return (
        <TextField
            id="tweeter-input"
            data-testid="tweeter-input"
            label="Text to tweetify:"
            multiline
            fullWidth
            inputProps={{ maxLength: 140 }}
            minRows={4}
            maxRows={5}
            onChange={handleOnInputChange}
        />
    )
}

