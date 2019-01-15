import React, { Component } from 'react';
import { random } from 'lodash';
import 'typeface-roboto';
import { Grid, withStyles } from '@material-ui/core';
import QuoteMachine from './components/QuoteMachine';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    background: 'black',
  }
};

class App extends Component {
  state = { 
    quotes: [],
    quoteIndex: null, 
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.setQuoteIndex));
  }

  get randomQuote() {
    const {quotes, quoteIndex} = this.state;
    
    return (!quotes.length || !Number.isInteger(quoteIndex))
      ? undefined
      : quotes[quoteIndex];
  }

  setQuoteIndex = () => {
    const {quotes} = this.state;

    const quoteIndex = !quotes.length
      ? null
      : random(0, quotes.length - 1);

    this.setState({ quoteIndex });
  }

  render() {
    const {randomQuote, setQuoteIndex} = this;
    const {container} = this.props.classes;

    return (
      <Grid className={container} id="quote-box" justify="center" container>
        <Grid xs={11} lg={8} item>
          { randomQuote ? <QuoteMachine randomQuote={randomQuote} newQuoteIndex={setQuoteIndex}/> : null}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
