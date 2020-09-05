case ${deck[$((0 + RANDOM % 51))]} in
        'Ace') 
            computers_hand+=11
        ;;
        '2')
            computers_hand+=2;;
        '3') computers_hand+=3;;
        '4') computers_hand+=4;;
        '5') computers_hand+=5;;
        '6') computers_hand+=6;;
        '7') computers_hand+=7;;
        '8') computers_hand+=8;;
        '9') computers_hand+=9;;
        '10') computers_hand+=10;;
        'Jack') computers_hand+=10;;
        'Queen') computers_hand+=10;;
        'King') computers_hand+=10;;
        *) echo "Error card fault" ;; #default
        esac