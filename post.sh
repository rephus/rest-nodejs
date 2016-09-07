#!/bin/bash
# Send test POST message to our service
read -d '' json << EOF

{
 "foo": "bar"
 }

EOF

echo "$json"

curl -X POST -H "Content-Type: application/json" "localhost:8988" -d "$json"
