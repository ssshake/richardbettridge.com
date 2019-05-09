ls -1 *.gif| cut -d'.' -f1 | while read line; do convert "$line.gif[0]" "$line"-preview.gif; done
