/***********
Mohsen Tavakoli - nextVersion
$node nextVersion.js input
************/

// Increamenting each sub version by 1
const incVersion = (subVersion) => (parseInt(subVersion) + 1);

// Printing the final version of the given version.
const joinVersion = (version) => (version.join('.'));

// Main function
const nextVersion = (version) => {
    version = version.split('.'); // Using the split function on the given version using '.' key it will create an array of subversions.
    let lastIndex = version.length - 1; // Using the variable lastIndex to keep track of the last subVersion.
    for(i = lastIndex; 0 <= i; i--){ 
        if(parseInt(version[i]) + 1 > 9 && i !== 0){ // If the last subVersion + 1 > 9, subVersion will be assigned 0 and the last subVersion will be increamented by 1. 
            version[i]= 0;
        } else{
            version[i] = incVersion(version[i]); // If the last subVersion + 1 < 9, subVersion will be increamented normally and the loop will be exited.
            break;
        }
    }

    const finalVersion = joinVersion(version);

    return finalVersion;
}

const main = (args) => {
    if(args[0]){
        console.log(nextVersion(args[0])); // calling the nextVersion Function using the User input.
    }
}

main(process.argv.slice(2)); // first two inputs in the CLI will be ignored and the rest of the args will be saved into the args array.

module.exports.incVersion = incVersion;
module.exports.joinVersion = joinVersion;
module.exports.nextVersion = nextVersion;
