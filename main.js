var types = "";
var conditions = "";

info = ["An igloo, also known as a snow house or snow hut, is a type of shelter built of snow, typically built when the snow is suitable. Although igloos are often associated with all Inuit and Eskimo peoples, they were traditionally used only by the people of Canada's Central Arctic and Greenland's Thule area. "

, "A hut is a primitive dwelling, which may be constructed of various local materials. Huts are a type of vernacular architecture because they are built of readily available materials such as wood, snow, ice, stone, grass, palm leaves, branches, hides, fabric, or mud using techniques passed down through the generations."

, "A skyscraper is a tall continuously habitable building having multiple floors. Modern sources currently define skyscrapers as being at least 100 metres or 150 metres in height, though there is no universally accepted definition."

, "A bungalow is a small house or cottage that is either single-storey or has a second storey built into a sloping roof, and may be surrounded by wide verandas. The first house in England that was classified as a bungalow was built in 1869. "

, "A mansion is a large dwelling house. The word itself derives through Old French from the Latin word mansio dwelling, an abstract noun derived from the verb manere to dwell."

, "Stilt houses are houses raised on stilts over the surface of the soil or a body of water. Stilt houses are built primarily as a protection against flooding; they also keep out vermin. The shady space under the house can be used for work or storage. "];


conditionGetSet = ["Natural lighting will reduce the production of harmful bacteria and organisms that can grow in any house. ... Sunlight improves circulation. Natural sun increases red blood cells. Sunlight boosts your immune system."


, "Ventilation helps your home rid itself of moisture, smoke, cooking odours, and indoor pollutants. ... One of the reasons ventilation is so important is because it controls how much moisture is lingering in your home. Without a ventilation system in place, you have no control of the air flow in a building."
,


"Sanitation is one of the most important aspects of community well-being because it protects human health, extends life spans, and is documented to provide benefits to the economy. ... One key goal of sanitation is to safely reduce human exposure to pathogens."]


images = ["igloo.jpg", "hut.png", "skyscraper.png", "bungalow.png", "mansion.png", "stilt.jpg"];

function getInfo(){
    types = document.getElementById("houses_dropdown").value;
    doIt();
}

function doIt(){
    if (types == "igloo")
    {
        document.getElementById("house_img").src=images[0];
        document.getElementById("house_info").innerHTML=info[0];
    }

    if (types == "hut")
    {
        document.getElementById("house_img").src=images[1];
        document.getElementById("house_info").innerHTML=info[1];
    }

    if (types == "skyscraper")
    {
        document.getElementById("house_img").src=images[2];
        document.getElementById("house_info").innerHTML=info[2];
    }
    if (types == "bungalow")
    {
        document.getElementById("house_img").src=images[3];
        document.getElementById("house_info").innerHTML=info[3];
    }
    if (types == "mansion")
    {
        document.getElementById("house_img").src=images[4];
        document.getElementById("house_info").innerHTML=info[4];
    }
    if (types == "stilt")
    {
        document.getElementById("house_img").src=images[5];
        document.getElementById("house_info").innerHTML=info[5];
    }

}

function getCondition(){
    conditions = document.getElementById("houses_condition_dropdown").value;
    conditionsGet();
}

function conditionsGet(){
    if (conditions == "sunlight")
    {
        document.getElementById("condition_info").innerHTML = conditionGetSet[0];
    }
    
    if (conditions == "ventilation")
    {
        document.getElementById("condition_info").innerHTML = conditionGetSet[1];
    }
    
    if (conditions == "sanitation")
    {
        document.getElementById("condition_info").innerHTML = conditionGetSet[2];
    }

}

