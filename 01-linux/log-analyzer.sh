#!/bin/bash
set -e
# If user passes a file path as argument, use it
# Otherwise, use default log file path
LOG_FILE="/c/Users/Tarun/Desktop/revature/sample-log.txt"
echo "===================LOG ANALYSIS REPORT================="
echo "File: $LOG_FILE"
# Check if file exists
if [ ! -e $LOG_FILE ]; then
        echo "Error : Log file not found"
        exit 1
else
# Count total number of lines
        count=0
        while read line; do
                ((count++))
        done < sample-log.txt
        echo "Total Lines: $count"
        echo "-------------------------------------------------"
        echo "INFO: $(grep -c -i 'INFO' "$LOG_FILE")"
        echo "WARNING: $(grep -c -i 'WARNING' "$LOG_FILE")"
        echo "ERROR: $(grep -c -i 'error' "$LOG_FILE")"
        echo "-----------------------------------------------"
        echo "Unique IP Addresses Found:"
        IP_LIST=$(grep -oE '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' "$LOG_FILE" | sort | uniq)
        echo $IP_LIST
        echo "==============================================="
fi

