import React, { useState } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import styled from 'styled-components';
import { Colors } from "../styles/Colors";

const Title = styled(Text)`
  color: ${ props => props.active ? Colors.red : Colors.orange };
  font-size: 20px;
  margin: 20px 0 0 20px;
`;

const Separator = styled(View)`
  width: 100%;
  background: ${ Colors.yellow };
  height: 1px;
  margin-top: 20px;
`;

const Grid = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
`;

const GridRow = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const GridRowItem = styled(TouchableOpacity)`
  width: 25%;
  padding: 40px;
  justify-content: center;
  align-items: center;
`;

const GridText = styled(Text)`
  font-size: 20px;
`;

const Results = styled(View)`
  height: 25%;
  background: red;
  text-align: right;
  justify-content: flex-end;
  align-items: flex-end;
`;

const ResultsText = styled(Text)`
  font-size: 40px;
  margin-bottom: 20px;
  margin-right: 20px;
`;

const Home = () => {
  const [value, setValue] = useState('');
  const clickButton = (gridValue) => {
    const newValue = value + gridValue;
    setValue(newValue);
  };

  const gridData = [
    {
      values: ['7', '8', '9', 'x']
    },
    {
      values: ['4', '5', '6', '-']
    },
    {
      values: ['1', '2', '3', '+']
    },
    {
      values: [',', '0', '()', '=']
    }
  ];

  return (
    <SafeAreaView>
      <Title active={true}>Calculatrice</Title>
      <Separator />
      <Results>
        <ResultsText>{value}</ResultsText>
      </Results>
      <Grid>
        { gridData.map((row, i) => {
          return (
            <GridRow key={i}>
              { row.values.map((item, i) => (
                <GridRowItem key={i} onPress={() => clickButton(item)}>
                  <GridText>{ item }</GridText>
                </GridRowItem>
              )) }
            </GridRow>
          )
        })}
      </Grid>
    </SafeAreaView>
  )
};

export default Home;
