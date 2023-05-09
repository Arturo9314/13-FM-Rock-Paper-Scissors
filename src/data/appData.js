import rock from '../assets/icon-rock.svg'
import paper from '../assets/icon-paper.svg'
import scissors from '../assets/icon-scissors.svg'
import lizard from '../assets/icon-lizard.svg'
import spock from '../assets/icon-spock.svg'

export default [
    {
        name: 'rock', icon: rock, beats: ['scissors', 'lizard']
    },
    {
        name: 'paper',  icon: paper, beats: ['rock', 'spock']
    },
    {
        name: 'scissors', icon: scissors, beats: ['paper', 'lizard']
    },
    {
        name: 'lizard', icon: lizard, beats: ['spock', 'paper']
    },
    {
        name: 'spock', icon: spock, beats: ['scissors', 'rock']
    }
]