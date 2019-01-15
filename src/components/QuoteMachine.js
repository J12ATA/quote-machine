import React from 'react';
import {withStyles} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons'

const styles = {
  card: {
    background: 'black',
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'black',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  text: {
    color: 'white',
  }
}

const QuoteMachine = ({classes, randomQuote, newQuoteIndex}) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography className={classes.text} id='text'>
        <span id='quote'>{randomQuote.quote}</span> - <span id='author'>{randomQuote.author}</span>
      </Typography>
    </CardContent>
    <CardActions>
      <Button className={classes.button} variant="outlined" color="primary" size="small" onClick={newQuoteIndex} id='new-quote'>Next Quote</Button>
      <IconButton
        id='tweet-quote'
        target='_blank'
        href={`https://twitter.com/intent/tweet?text=${randomQuote.quote}&hashtags=j12ata`}
      >
        <FontAwesomeIcon icon={faTwitter} size='md' color='white'></FontAwesomeIcon>
      </IconButton>
    </CardActions>
  </Card>
);

export default withStyles(styles)(QuoteMachine);