import TextField from "@mui/material/TextField";

export default function ConvertedTweet({ output }) {
    return (
        <TextField
            id="tweeter-output"
            data-testid="tweeter-output"
            label="Tweetified text:"
            placeholder="Placeholder"
            fullWidth
            multiline
            minRows={4}
            maxRows={5}
            value={output}
            disabled={true}
            InputProps={{
                maxLength: 140
            }}
        />
    )
}
