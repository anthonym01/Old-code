#!/bin/bash
echo "Welcome to 'Bash'Jack"

function startgame(){
    echo -e "Rules:
    1. Jack Queen King are worth 10pts each
    2. Ace has a value of 11
    3. Numbered cards (2 through 10) maintain their value
    4. You WIN, if
    \t• Player = 21; then double wager
    \t• Player < 21 & Computer < 21 & Player < Computer; then 1.5*wager
    \t• Player < 21 & Computer > 21; then 1.5*wager
    5. You LOSE wager, if
    \t• Player > 21
    \t• Player < 21 & Computer ≤ 21 & Computer < Player\n
    What is your wager? "
    read wager

    deck=('Ace' '2' '3' '4' '5' '6' '7' '8' '9' '10' 'Jack' 'Queen' 'King' 'Ace' '2' '3' '4' '5' '6' '7' '8' '9' '10' 'Jack' 'Queen' 'King' 'Ace' '2' '3' '4' '5' '6' '7' '8' '9' '10' 'Jack' 'Queen' 'King' 'Ace' '2' '3' '4' '5' '6' '7' '8' '9' '10' 'Jack' 'Queen' 'King')

    for ((i=0;i<2;i++))# give the computer 2 cards
    do
        temp=${deck[$((0 + RANDOM % 51))]}
        if [$temp -eq 'Ace'];
        then
            computers_hand=$((computers_hand+11))
        elif [$temp -eq '2'];
        then
            computers_hand=$((computers_hand+2))
        elif [$temp -eq '3'];
        then
            computers_hand=$((computers_hand+3))
        elif [$temp -eq '4'];
        then
            computers_hand=$((computers_hand+4))
        elif [$temp -eq '5'];
        then
            computers_hand=$((computers_hand+5))
        elif [$temp -eq '6'];
        then
            computers_hand=$((computers_hand+6))
        elif [$temp -eq '7'];
        then
            computers_hand=$((computers_hand+7))
        elif [$temp -eq '8'];
        then
            computers_hand=$((computers_hand+8))
        elif [$temp -eq '9'];
        then
            computers_hand=$((computers_hand+9))
        elif [$temp -eq '10'];
        then
            computers_hand=$((computers_hand+10))
        elif [$temp -eq 'Jack'];
        then
            computers_hand=$((computers_hand+10))
        elif [$temp -eq 'Queen'];
        then
            computers_hand=$((computers_hand+10))
        elif [$temp -eq 'King'];
        then
            computers_hand=$((computers_hand+10))
        else
            echo "deck error default"
        fi
    done

    for ((i=0;i<2;i++))# give the player 2 cards
    do
        temp=${deck[$((0 + RANDOM % 51))]}
        if [$temp -eq 'Ace'];
        then
            players_hand=$((players_hand+11))
        elif [$temp -eq '2'];
        then
            players_hand=$((players_hand+2))
        elif [$temp -eq '3'];
        then
            players_hand=$((players_hand+3))
        elif [$temp -eq '4'];
        then
            players_hand=$((players_hand+4))
        elif [$temp -eq '5'];
        then
            players_hand=$((players_hand+5))
        elif [$temp -eq '6'];
        then
            players_hand=$((players_hand+6))
        elif [$temp -eq '7'];
        then
            players_hand=$((players_hand+7))
        elif [$temp -eq '8'];
        then
            players_hand=$((players_hand+8))
        elif [$temp -eq '9'];
        then
            players_hand=$((players_hand+9))
        elif [$temp -eq '10'];
        then
            players_hand=$((players_hand+10))
        elif [$temp -eq 'Jack'];
        then
            players_hand=$((players_hand+10))
        elif [$temp -eq 'Queen'];
        then
            players_hand=$((players_hand+10))
        elif [$temp -eq 'King'];
        then
            players_hand=$((players_hand+10))
        else
            echo "deck error default"
        fi
    done

    echo " Your hand: $players_hand"
    if []
    echo "S: Stop playing
        H: Draw another card from deck
        D: Double wager and draw one, and only one more card
        What is your choice?"
    read choice
    if [choice -eq 'D'];
    then
        drawand_double
    elif [choice -eq 'S'];
    then
        endgame
    elif [choice -eq 'H'];
    then
        drawnew
    else
        endgame
    fi
}
startgame #start game
function endgame(){
    echo "goodbye player"
}
function drawnew(){
    echo "Drawing new car" 
}
function drawand_double(){
    echo "Its all of nothing time"
}