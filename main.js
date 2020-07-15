

var openmodal = document.querySelectorAll('.modal-open')
for (var i = 0; i < openmodal.length; i++) {
    openmodal[i].addEventListener('click', function(event){
    event.preventDefault()
    toggleModal()
    })
}

const overlay = document.querySelector('.modal-overlay')
overlay.addEventListener('click', toggleModal)

var closemodal = document.querySelectorAll('.modal-close')
for (var i = 0; i < closemodal.length; i++) {
    closemodal[i].addEventListener('click', toggleModal)
}

document.onkeydown = function(evt) {
    evt = evt || window.event
    var isEscape = false
    if ("key" in evt) {
    isEscape = (evt.key === "Escape" || evt.key === "Esc")
    } else {
    isEscape = (evt.keyCode === 27)
    }
    if (isEscape && document.body.classList.contains('modal-active')) {
    toggleModal()
    }
};


function toggleModal () {
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    body.classList.toggle('modal-active')
}

// PARAMETER ADD/DELETE

parameterCount = 1;
ruleCount = 1;

function addParameterCount(){ parameterCount++; }
function addRuleCount(){ ruleCount++; }

function addParameter(rule)
{
    addParameterCount();
    $( '#rule' + rule + '_parameterSection' ).append('<div id="rule' + rule + '_parameter' + parameterCount + '" class="flex flex-wrap items-stretch mb-4 relative "><input type="text" name="rule' + rule + '_parameter' + parameterCount + '" class="flex-shrink flex-grow flex-auto leading-tight w-px flex-1 relative bg-white appearance-none border-2 rounded py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Insert parameter ..."><div class="flex -mr-px"><button id="rule' + rule + '_addParameter_' + parameterCount + '" onclick="removeParameter(' + rule + ',' + parameterCount + ')" class="flex items-center leading-normal bg-grey-lighter rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm cursor-pointer">Delete Rule</button></div></div>');
}


function removeParameter(rule,parameter)
{
    $('#rule' + rule + '_parameter'+parameter).remove();
}

// RULE ADD/DELETE

function addRule()
{
    addRuleCount();
    addParameterCount();

    $( '#ruleSection' ).append('<div id="rule'+ ruleCount +'" class="mb-4 p-6 rounded-md bg-gray-200"><p class="font-semibold text-gray-600 mb-4">Rule '+ ruleCount +'</p><div class="md:flex"><div class="md:w-1/5 mr-2"><select  id="variable'+ ruleCount +'" name="variable'+ ruleCount +'" class="bg-white appearance-none rounded w-full border-2 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"><option value="all">name</option><option value="age">age</option><option value="gender">gender</option></select></div><div class="md:w-1/5 mr-2"><select  id="operator'+ ruleCount +'" name="operator'+ ruleCount +'" class="bg-white appearance-none rounded w-full border-2 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"><option value="is">is</option><option value="lessthan">less than</option><option value="morethan">more than</option></select></div><div class="md:w-3/5 mr-2"><div id="rule'+ ruleCount +'_parameterSection" class="flex flex-col"><div id="rule' + ruleCount + '_parameter' + parameterCount + '" class="flex flex-wrap items-stretch mb-4 relative "><input type="text" name="rule' + ruleCount + '_parameter' + parameterCount + '" class="flex-shrink flex-grow flex-auto leading-tight w-px flex-1 relative bg-white appearance-none border-2 rounded py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Insert parameter ..."><div class="flex -mr-px"><button type="button" onclick="addParameter('+ ruleCount +')" class="flex items-center leading-normal bg-grey-lighter rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm cursor-pointer">Add Rule</button></div></div></div></div><div class="flex md:w-1/5"><button id="rule'+ ruleCount +'_addRule" type="button" onclick="removeRule('+ ruleCount +')" class="h-full focus:outline-none w-8 ml-4 mr-2 -mt-1"><i class="bx bx-minus-circle bx-sm"></i></button></div></div></div>');
}


function removeRule(rule)
{
    $('#rule' + rule ).remove();
}


    