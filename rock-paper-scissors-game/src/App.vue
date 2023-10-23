<script setup>

import { ref, computed, onMounted  } from 'vue';

const wins = ref(0)
const draws = ref(0)
const losses = ref(0)

const choice = ref(null)
const computerChoice = ref(null)
const verdict = ref(null)
// TO DO do like the test for the other strings ("rock, paper, scissor", draw, lose, win)
const test = 'rock'

const outcomes ={
  test:{
    "rock": "draw",
    "paper": "lose",
    "scissor": "win",
  },
  "paper":{
    "rock": "win",
    "paper": "draw",
    "scissor": "lose",
  },
  "scissor":{
    "rock": "lose",
    "paper": "win",
    "scissor": "draw",
  }
} 

const play = (c) =>{
  choice.value = c;

  const choices = ['rock', 'paper', 'scissor'];
  const choicesLenght = choices.length;
  const random = Math.floor(Math.random()* choicesLenght);
  computerChoice.value = choices[random]

  
  console.log(computerChoice.value);
  console.log(choice.value);
  console.log(outcomes);
  const outcome = outcomes[choice.value][computerChoice.value]
  console.log(outcome);

  switch (outcome) {
    case "win":
      wins.value++
		  verdict.value = 'You win!'
      break;
    case "lose":
      losses.value++
      verdict.value = "You lost!"
      break;
    case "draw":
      draws.value++
      verdict.value = "It is a draw"
      break;
    default:
      verdict.value = "OPPPS Somethings gone wrong"
      break;
  }
  SaveGame();
}

const winPercentage = computed(() => {
  const total = wins.value+losses.value+draws.value;
  return total ? (wins.value / total) * 100 : 0
})


const SaveGame = () => {
  localStorage.setItem('wins', wins.value)
  localStorage.setItem('loses', losses.value)
  localStorage.setItem('draws', draws.value)
}

const LoadGame = () => {
  wins.value = parseInt(localStorage.getItem("wins")) || 0
  losses.value = parseInt(localStorage.getItem("loses")) || 0
  draws.value = parseInt(localStorage.getItem("draws")) || 0
}

const ResetRound = () => {
  choice.value = null;
  computerChoice.value = null;
  verdict.value = null;
}

onMounted(() => {
  LoadGame()

  window.addEventListener("keypress", (e)=>{
    if(e.key === 'r'){
      ResetRound()
    }
  })
})

</script>

<template>
	<div class="bg-gray-200 text-black text-center min-h-screen flex flex-col  justify-center items-center">
    <header class="container mx-auto p-6 mt-12">
      <h1 class="text-4xl font-bold">Rock, Paper, Scissors!</h1>
		</header>
    
    <main class="container mx-auto p-6 flex-1 flex flex-col justify-center items-center mb-14">
			<div v-if="choice === null" class="flex items-center justify-center -mx-6">

				<button @click="play('rock')"
					class="bg-white rounded-full shadow-lg w-64 p-12 mx-6 transition-colors duration-500 hover:bg-cyan-500">
					<img src="./assets/RockIcon.svg" alt="Rock" class="w-full" />
				</button>

				<button @click="play('paper')"
					class="bg-white rounded-full shadow-lg w-64 p-12 mx-6 transition-colors duration-500 hover:bg-lime-500">
					<img src="./assets/PaperIcon.svg" alt="Paper" />
				</button>

				<button @click="play('scissor')"
					class="bg-white rounded-full shadow-lg w-64 p-12 mx-6 transition-colors duration-500 hover:bg-yellow-500">
					<img src="./assets/ScissorsIcon.svg" alt="Scissors" />
				</button>

			</div>

			<div v-else>
				<div class="text-3xl mb-4">
					You picked <span class="text-pink-500">{{ choice }}</span>
				</div>
				<div class="text-3xl mb-4">
					The computer picked <span class="text-green-500">{{ computerChoice }}</span>
				</div>
				<div class="text-6xl mb-12">
					{{ verdict }}
				</div>

				<button @click="ResetRound" class="bg-pink-500 text-lg py-2 px-4">Reset</button>
			</div>

			<div class="mt-12 text-3xl mb-4">{{ wins }} : {{ draws }} : {{ losses }}</div>

			<div class="text-lg">Win rate: {{ Math.round(winPercentage) }}%</div>
		</main>

	</div>
</template>