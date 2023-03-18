import { useState } from "react";
import { Button } from "../components/Button";
import { FlashCard } from "../components/FlashCard";
import { FlashCards } from "../components/FlashCards";
import Header from "../components/Header";
import Main from "../components/Main";
import { RadioButton } from "../components/RadioButton";
import { allFlashCards } from "../data/flashcards";
import { helperShuffleArray } from "../helpers/arrayHelpers";

export function FlashCardsPage() {
  const [allCards, allCardsState] = useState(allFlashCards)
  const [showTitle, showTitleState] = useState(true)

  function handleButtonClick() {
    allCardsState(currentState => helperShuffleArray(currentState))
  }

  function handleRadioButtonTitle() {
    showTitleState(true)
  }

  function handleRadioButtonDescription() {
    showTitleState(false)
  }

  return (
    <div>
      <Header>React Flash Cards V1</Header>
      <Main>
        <div className="text-center">
          <Button onButtonClick={handleButtonClick}>Embaralhar Cards</Button>
        </div>
        <div className="flex flex-row items-center justify-center space-x-4 m-4">
          <RadioButton name="showInfo" buttonChecked={showTitle} onButtonClick={handleRadioButtonTitle}>Mostrar Titulo</RadioButton>
          <RadioButton name="showInfo" buttonChecked={!showTitle} onButtonClick={handleRadioButtonDescription}>Mostrar Descrição</RadioButton>
        </div>
        <FlashCards>
          {allCards.map(e => {
            return <FlashCard key={e.id} title={e.title} description={e.description} showFlashCardTitle={showTitle}/>
          })}
        </FlashCards>
      </Main>
    </div>
  )
}