import React from 'react';
import { Box, TextField, Paper } from '@mui/material';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import { SearchBarContainer } from '../../components/SearchBarContainer';

function Home() {
  const [travels, setTravels] = React.useState(null);
  const [searchPhrase, setSearchPhrase] = React.useState('');

  // const filteredTravels = React.useMemo(() => {
  //   const searchPhraseUpperCase = searchPhrase.toUpperCase();
  //   return (
  //     travels &&
  //     travels.filter((travel) => (
  //       travel.title.toUpperCase().includes(searchPhraseUpperCase) ||
  //       travel.category.toUpperCase().includes(searchPhraseUpperCase) ||
  //       travel.description.toUpperCase().includes(searchPhraseUpperCase)
  //     )),
  // }, [travels, searchPhrase]);

  return (
    <Box>
      <Header />
      <Banner />
      <SearchBarContainer>
        <TextField
          component={Paper}
          elevation={8}
          fullWidth
          label="Type to search"
          id="searchBar"
          color="secondary"
          value={searchPhrase}
          size="normal"
          onChange={(e) => setSearchPhrase(() => e.target.value)}
        />
      </SearchBarContainer>
    </Box>
  );
}

export default Home;
