import TextField from "@mui/material/TextField";

export default function ConvertedTweet({ output }) {
    return (
        <TextField
            id="output"
            label="Tweetified text:"
            placeholder="Placeholder"
            fullWidth
            multiline
            minRows={4}
            maxRows={5}
            value={output}
            disabled
            InputProps={{
                maxLength: 140
            }}
        />
    )
}
