import React from 'react'
import useBeaches from '../shared/hooks/useBeaches'
import Card from '../components/Card'
import useStates from '../shared/hooks/useStates'
import Flex from '../components/Flex'
import Header from '../components/Header'
import Select from '../components/Select'

export const Home = (): JSX.Element => {
  const { beaches, handleFilter } = useBeaches()
  const { states } = useStates()

  return (
    <>
      <Header as="header" justify="flex-start" alignItems="center">
        <Select
          id="uf"
          items={states}
          label="Procure praias por Estado"
          onChange={(event) => handleFilter(event.target.value)}
          renderOption={(state: string) => (
            <option value={state} key={state}>
              {state}
            </option>
          )}
        />
      </Header>

      <Flex as="main">
        {beaches.map(({ name, location, state, id, description, image }) => (
          <Card
            key={id}
            title={name}
            subtitle={`${location}, ${state}`}
            text={description}
            image={image}
          />
        ))}

        {beaches.length === 0 && <p>No items found</p>}
      </Flex>
    </>
  )
}

export default Home
