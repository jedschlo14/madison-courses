import { Paper } from "@material-ui/core";

export function Error404() {
    return (
        <Paper elevation={5} className="section" style={{ borderRadius: '20px', marginLeft: '30%', marginRight: '30%'}}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10%', padding: '1%'}}>
                <h3>looks like this page doesn't exist</h3>
            </div>
        </Paper>
    );
}