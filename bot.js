let fs = require ('fs');
let Twit = require('twit');
let config = require('./config.js');
let T = new Twit(config);

let landmarkArray = [
  "69th Regiment Armory, home of the watershed Armory Show in 1913, which introduced America to modern art. https://en.wikipedia.org/wiki/File:69th-regiment-armory.JPG ",
  "Admiral David Glasgow Farragut Gravesite, only intact known property directly associated with Admiral David Farragut. https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Admiral_David_Farragut_Monument_1024.jpg/240px-Admiral_David_Farragut_Monument_1024.jpg",
  "African Burial Ground, dedicated as National Monument on October 5, 2007; burial site in Lower Manhattan of over 400 Africans from the 17th and 18th centuries. https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/African_Burial_Ground.jpg/240px-African_Burial_Ground.jpg",
  "Ambrose (lightship), several miles offshore, that marked Ambrose Channel into New York Harbor, now at South Street Seaport Museum. https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Ambrose_Lightship.jpg/240px-Ambrose_Lightship.jpg",
  "American Stock Exchange Building, world-class stock exchanges dating back to colonial times. Building area 181,725sq.ft. https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/AMEX.jpg/240px-AMEX.jpg",
  "Louis Armstrong House, home of jazz legend Louis Armstrong for 28 years. https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Louis-armstrong-house.jpg/240px-Louis-armstrong-house.jpg",
  "Chester A. Arthur House, home of President Chester A. Arthur; site of his inaugural oath. https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/123-lexington.jpg/240px-123-lexington.jpg",
  "Alice Austen House, home of photographer Alice Austen, now a museum. https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Alice_Austen_House.jpg/240px-Alice_Austen_House.jpg",
  "Bartow-Pell Mansion, 19th-century mansion in largest New York City park. https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Bartow-pell-mansion.jpg/240px-Bartow-pell-mansion.jpg",
  "Bayard-Condict Building, the only Louis Sullivan building in New York City; one of the first steel skeleton skyscrapers. https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/SullivanNY1.jpg/240px-SullivanNY1.jpg",
  "Bell Laboratories Building, Bell Labs work here included experimental phonograph record, vacuum tubes, talking movies (1923), black and white and color TV, radar, and early commercial remote broadcasts. https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/463-west-street-gate.jpg/240px-463-west-street-gate.jpg",
  "Brooklyn Bridge, the first steel wire suspension bridge; at one point the largest in the world. https://en.wikipedia.org/wiki/File:Brooklyn_Bridge_-_New_York_City.jpg",
  "Brooklyn Heights Historic District, exemplary collection of 19th-century architectural styles; first historic district in New York City. https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/62_Montague_Street_Brooklyn_heights_july2006a.jpg/240px-62_Montague_Street_Brooklyn_heights_july2006a.jpg",
  "Brooklyn Historical Society Building, one of the few remaining buildings by George B. Post; innovative structural system. https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Brooklyn-historical-society.jpg/240px-Brooklyn-historical-society.jpg",
  "Ralph Johnson Bunche House, home of Ralph Johnson Bunche, eminent African-American diplomat and Undersecretary General of United Nations. https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Ralph-johnson-bunch-house.jpg/240px-Ralph-johnson-bunch-house.jpg",
  "Carnegie Hall, one of the most famous music venues in the world. https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Carnegie_Hall.jpg/240px-Carnegie_Hall.jpg",
  "Andrew Carnegie Mansion, home of Andrew Carnegie, now the Cooper-Hewitt, National Design Museum. https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Cooper-hewitt_90_jeh.JPG/240px-Cooper-hewitt_90_jeh.JPG",
  "Central Park, the Green Lung of the city; one of the most visited city parks in the world; designed by Frederick Law Olmsted and Calvert Vaux. https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Central_Park_New_York_City_New_York_23_cropped.jpg/240px-Central_Park_New_York_City_New_York_23_cropped.jpg",
  "Central Synagogue, oldest synagogue continuously in use by a New York City Jewish congregation; built in a Moorish Revival style to recognize importance of that period in Jewish history. https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Central_Synagogue_Lex_jeh.jpg/240px-Central_Synagogue_Lex_jeh.jpg",
  "Chamber of Commerce Building, New York City's Chamber of Commerce; established in 1768; prototype for the organization. https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/65-liberty-st.jpg/240px-65-liberty-st.jpg",
  "Chrysler Building, Art Deco skyscraper; distinctive feature of Manhattan skyline; at one point world's tallest building. https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Chrysler_building-_top.jpg/240px-Chrysler_building-_top.jpg",
  "Church of the Ascension, early church design by Richard Upjohn; valuable interior artwork. https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Church_of_the_Ascension_by_David_Shankbone.jpg/240px-Church_of_the_Ascension_by_David_Shankbone.jpg",
  "City Hall, Oldest city hall in U.S. still in use as main municipal government building. https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Nyc_city_hall_jan06a.jpg/240px-Nyc_city_hall_jan06a.jpg",
  "Conference House, only surviving pre-Revolutionary War manor house in New York City; site of unsuccessful peace conference in 1776. https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Conference-house-staten-island.jpg/240px-Conference-house-staten-island.jpg",
  "Will Marion Cook House, home of the leading black composer and musician Will Marion Cook. https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Marion-cook-house.jpg/240px-Marion-cook-house.jpg",
  "Cooper Union, pioneering adult education center; site of famous anti-slavery speech by Abraham Lincoln. https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Cooper_Union_by_David_Shankbone_crop.jpg/240px-Cooper_Union_by_David_Shankbone_crop.jpg",
  "Daily News Building, first modernistic free-standing skyscraper designed by Raymond Hood. https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Daily_News_Building.jpg/240px-Daily_News_Building.jpg",
  "Dakota Apartments, combination of Renaissance architectural styles by Henry Hardenbergh; setting for Rosemary's Baby and the shooting death of John Lennon. https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/1_West_72nd_Street_%28The_Dakota%29_by_David_Shankbone.jpg/240px-1_West_72nd_Street_%28The_Dakota%29_by_David_Shankbone.jpg",
  "Dyckman House, only remaining farmhouse in Manhattan. https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Dyckman_House_2007.jpg/240px-Dyckman_House_2007.jpg",
  "Eldridge Street Synagogue, one of the oldest synagogues in the U.S.; first built by Jews from Eastern Europe. https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/EldridgeStreetSynagogue.jpg/240px-EldridgeStreetSynagogue.jpg",
  "Duke Ellington House, the legendary jazz composer and bandleader, lived in Apartment 4A from 1939–61. https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Duke-ellington.jpg/240px-Duke-ellington.jpg",
  "Empire State Building, world's tallest building from 1931–1972 and internationally recognized symbol of New York City. https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg/240px-Empire_State_Building_from_the_Top_of_the_Rock.jpg",
  "Equitable Building, one of the earliest skyscrapers in Manhattan; profoundly influenced later skyscraper design. https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/DSCN3512_equitablebuilding_e.jpg/240px-DSCN3512_equitablebuilding_e.jpg",
  "Hamilton Fish House, home of Hamilton Fish, future Governor and Senator of New York. https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/21-stuyvesant.jpg/240px-21-stuyvesant.jpg",
  "Flatiron Building, considered the World's first skyscraper. Distinctive triangular building at Madison Square; world's tallest 1901-1911. https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/FlatIronBldg.jpg/240px-FlatIronBldg.jpg",
  "Founder's Hall, The Rockefeller University, building marked the start of John D. Rockefeller Jr.'s putting the vast family fortune to philanthropic purposes. https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Founders-hall.jpg/240px-Founders-hall.jpg",
  "The Frick Collection and Frick Art Reference Library Building. https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Henry_C_Frick_House_009.JPG/240px-Henry_C_Frick_House_009.JPG",
  "Governors Island, island in NY Harbor which served various branches of the US Military from 1783 until the late 1990s; future uses are still being decided. https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Castle_Williams_Governors_Island_NY.jpg/240px-Castle_Williams_Governors_Island_NY.jpg",
  "Grace Church, Gothic Revival masterpiece designed by James Renwick, Jr. https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/GraceChurchBroadway.JPG/240px-GraceChurchBroadway.JPG",
  "Grand Central Terminal, Beaux-Arts architecture; historic rail gateway to New York City; largest train station in the world by number of platforms. https://en.wikipedia.org/wiki/File:Grand_Central_Station_Main_Concourse_Jan_2006.jpg",
  "Green-Wood Cemetery, popular tourist attraction in the 1850s; most famous New Yorkers who died during the second half of the nineteenth century buried here. https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Chapel-at-Green-Wood.jpg/240px-Chapel-at-Green-Wood.jpg",
  "Hamilton Grange National Memorial, home of Alexander Hamilton: military officer, lawyer, member of the United States Constitutional Convention, American statesman, first United States Secretary of the Treasury, and Founding Father; facade is oldest surviving structure in Manhattan. https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Hamilton-Grange.jpg/240px-Hamilton-Grange.jpg",
  "Solomon R. Guggenheim Museum. https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/NYC_-_Guggenheim_Museum.jpg/240px-NYC_-_Guggenheim_Museum.jpg",
  "Henry Street Settlement and Neighborhood Playhouse, one of the nation's first settlement homes where new immigrants and the poor could find assistance. https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Henry-st-settlement.jpg/240px-Henry-st-settlement.jpg",
  "Matthew Henson Residence, home of Matthew Henson, African-American polar explorer who may have been the first to reach the North Pole. https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/246-west-150.jpg/240px-246-west-150.jpg",
  "Hispanic Society of America, museum of Iberian Art. https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/WTM_NewYorkDolls_010.jpg/240px-WTM_NewYorkDolls_010.jpg",
  "Holland Tunnel, tunnel underneath the Hudson River, connecting Manhattan and New Jersey; civil engineering landmark; one of the earliest ventilated tunnels. https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Holland_tunnel.jpg/240px-Holland_tunnel.jpg",
  "USS Intrepid, one of the most active U.S. ships during World War II; today a museum moored along the West Side. https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/USS_Intrepid_%28CV-11%29_operating_in_the_Philippine_Sea_in_November_1944_%28NH_97468%29.jpg/240px-USS_Intrepid_%28CV-11%29_operating_in_the_Philippine_Sea_in_November_1944_%28NH_97468%29.jpg",
  "James Weldon Johnson Residence, Harlem home of African-American artist-activist James Weldon Johnson. https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/187-west-135th.jpg/240px-187-west-135th.jpg",
  "King Manor, home of Rufus King, a signer of Declaration of Independence and early U.S. Senator from New York. https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Rufus-king-house.jpg/240px-Rufus-king-house.jpg",
  "Lettie G. Howard, last remaining Fredonia-type schooner (once the standard for American fishing boats) at the South Street Seaport. https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Schooner_Lettie_G._Howard%2C_South_Street_Seaport_Museum%2C_New_York_%28New_York_County%2C_New_York%29.jpg/240px-Schooner_Lettie_G._Howard%2C_South_Street_Seaport_Museum%2C_New_York_%28New_York_County%2C_New_York%29.jpg",
  "Lorillard Snuff Mill, oldest existing tobacco-manufacturing facility in U.S. https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Lorillard-snuff-mill.JPG/240px-Lorillard-snuff-mill.JPG",
  "Low Memorial Library, first building on Morningside Heights campus; capped by largest freestanding granite dome in U.S. https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Low_Library_Columbia_University_8-11-06.jpg/240px-Low_Library_Columbia_University_8-11-06.jpg",
  "R. H. Macy and Company Store (Macy's), largest department store in world for many years. https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/MacysDepartmentStoreNewyork.jpg/240px-MacysDepartmentStoreNewyork.jpg",
  "McGraw Hill Building, landmark Art Deco building; first U.S. building in International Style. https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Mcgraw-hill-42nd-st.jpg/240px-Mcgraw-hill-42nd-st.jpg",
  "Claude McKay Residence, home of African-American writer Claude McKay; now Harlem YMCA. https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/180-west135th.jpg/240px-180-west135th.jpg",
  "Metropolitan Life Insurance Company Tower, tallest building in the world 1909-13; still part of the skyline a century later. https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Metropolitan_Life_Insurance_Company_Tower_at_Night_Light_Up.jpg/240px-Metropolitan_Life_Insurance_Company_Tower_at_Night_Light_Up.jpg",
  "Metropolitan Museum of Art, one of the world's most important and prestigious art museums. https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Image-Metropolitan_Museum_of_Art_entrance_NYC_NY.JPG/240px-Image-Metropolitan_Museum_of_Art_entrance_NYC_NY.JPG",
  "Morgan Library & Museum, Office, Library, and now Museum of J. P. Morgan; the Panic of 1907 ended in the Library. https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Jpmorganlibrary.jpg/240px-Jpmorganlibrary.jpg",
  "Morris-Jumel Mansion, oldest building in Manhattan. https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Morris-jumel.jpg/240px-Morris-jumel.jpg",
  "National City Bank Building, home to one of the country's largest and most important banks since 1908. https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/55-wall-street.jpg/240px-55-wall-street.jpg",
  "New York Amsterdam News Building, influential black newspaper the New York Amsterdam News was published here 1916-38. https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/2293-seventh-ave.jpg/240px-2293-seventh-ave.jpg",
  "New York Botanical Garden, one of the leading botanical gardens in the world and home to many plant laboratories. https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ny-botanical-haupt-conservatory.JPG/240px-Ny-botanical-haupt-conservatory.JPG",
  "New York Cotton Exchange, first commodity market in the U.S. https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/1_Hanover_Square_001.JPG/240px-1_Hanover_Square_001.JPG",
  "New York Life Building, last significant Cass Gilbert skyscraper in Manhattan. https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ny-life-bldg.jpg/240px-Ny-life-bldg.jpg",
  "New York Public Library, one of the largest and most important libraries in the U.S. https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/New_York_Public_Library_May_2011.JPG/240px-New_York_Public_Library_May_2011.JPG",
  "New York Stock Exchange, one of the first securities markets in the U.S.; still the world's largest. https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/2004_-_United_States_-_Manhattan_-_New_York_City_-_New_York_-_New_York_Stock_Exchange_copy_4887745328.jpg/240px-2004_-_United_States_-_Manhattan_-_New_York_City_-_New_York_-_New_York_Stock_Exchange_copy_4887745328.jpg",
  "New York Studio School of Drawing, Painting and Sculpture, original home of the Whitney Museum, the first devoted to 20th-century American art. https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/8-14-eighth_street.jpg/240px-8-14-eighth_street.jpg",
  "New York Yacht Club, oldest yachting club in U.S.; longtime home of the America's Cup. https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Nyyc-2007.jpg/240px-Nyyc-2007.jpg",
  "Old Merchant's House, nineteenth-century family home; preserved inside and out. https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/WTM_tony_0079.jpg/240px-WTM_tony_0079.jpg",
  "Old Quaker Meeting House, only surviving 17th-century ecclesiastical frame building in New York; in almost continuous use since 1696. https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Old-quaker-house-flushing.jpg/240px-Old-quaker-house-flushing.jpg",
  "Philosophy Hall, Edwin Armstrong developed FM radio in this Columbia University building. https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Philohall.JPEG/240px-Philohall.JPEG",
  "Players Club, extensive collection of art and theater memorabilia; interior redone by Stanford White. https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Players_Club.jpg/240px-Players_Club.jpg",
  "Plaza Hotel, French Renaissance-style building; outstanding example of American hotel architecture; symbol of elegance; visible from much of lower Central Park; setting for Kay Thompson's popular Eloise series of children's books. https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Plaza_hotel.jpg/240px-Plaza_hotel.jpg",
  "Plymouth Church of the Pilgrims, Important station on Underground Railroad when Henry Ward Beecher was pastor. https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/HWB_in_the_Snow.jpg/240px-HWB_in_the_Snow.jpg",
  "Pupin Physics Laboratory, Columbia University, site of first splitting of uranium atom in U.S. and other milestones in development of atomic bomb. https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Pupin_Hall.jpg/240px-Pupin_Hall.jpg",
  "Quarters A, Brooklyn Navy Yard, home to Matthew Perry at the time of his opening of Japan. https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Quartersabloomjeh.jpg/240px-Quartersabloomjeh.jpg",
  "Paul Robeson Home, home of legendary African-American actor and activist Paul Robeson. https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/555-edgecombe.jpg/240px-555-edgecombe.jpg",
  "Jackie Robinson House, home of baseball great Jackie Robinson. https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Jackie-robinson-house.jpg/240px-Jackie-robinson-house.jpg",
  "Rockefeller Center, successful urban planning project of 20th-century America; changed Midtown Manhattan; originating site of popular NBC television programs Today and Saturday Night Live. https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Radio_City_Music_Hall_1.JPG/240px-Radio_City_Music_Hall_1.JPG",
  "Sailors' Snug Harbor, first and only home for retired merchant seamen in U.S. https://en.wikipedia.org/wiki/File:Sailors-snug-harbor.jpg",
  "St. Ann and the Holy Trinity Church, site of first figural stained-glass windows in U.S. https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/St-ann-brooklyn-heights.JPG/240px-St-ann-brooklyn-heights.JPG",
  "St. George's Episcopal Church, home church of Harry Thacker Burleigh, African-American singer who helped establish the spiritual in the liturgy of many American faiths. https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/St-george-episcopal.jpg/240px-St-george-episcopal.jpg",
  "St. Patrick's Cathedral, first large-scale medieval-style church built in U.S. https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Saint_Patrick%27s_Cathedral_by_David_Shankbone.jpg/240px-Saint_Patrick%27s_Cathedral_by_David_Shankbone.jpg",
  "St. Paul's Chapel, one of the few surviving colonial-era churches in city; George Washington worshipped here following his inauguration; site of informal memorials following September 11, 2001 terrorist attacks. https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/St-pauls-manhattan.JPG/240px-St-pauls-manhattan.JPG",
  "Margaret Sanger Clinic, clinic where Margaret Sanger dispensed birth control. https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/17-west-16.jpg/240px-17-west-16.jpg",
  "Schomburg Center for Research in Black Culture. https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Schomburg-center.jpg/240px-Schomburg-center.jpg",
  "Gen. Winfield Scott House, home of Winfield Scott, heroic general in the U.S.-Mexican War and later presidential candidate. https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/24-west-12th.jpg/240px-24-west-12th.jpg",
  "Seventh Regiment Armory, one of the most impressive collections of 1880s interior decoration outside of a museum; only armory actually owned by the unit for which it was constructed. https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/7th_Regiment_Armory_001.JPG/120px-7th_Regiment_Armory_001.JPG",
  "Harry F. Sinclair House, he oil industrialist, lived here from 1918–1930; now part of the Ukrainian Institute; often used in filmmaking and television production. https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Harry_F_Sinclair_House_9730.JPG/240px-Harry_F_Sinclair_House_9730.JPG",
  "Alfred E. Smith House, home of four time New York State governor, Alfred E. Smith (and later presidential candidate) from 1907 to 1923. https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Alfred-e-smith-house.jpg/240px-Alfred-e-smith-house.jpg",
  "SoHo-Cast Iron Historic District, elieved to be the largest existing collection of late 19th-century cast iron facades in the world. https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/NYC_SoHo_Green_Street.jpg/240px-NYC_SoHo_Green_Street.jpg",
  "A. T. Stewart Company Store, site of the first American department store (now known as the New York Sun building). https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/280-broadway.jpg/240px-280-broadway.jpg",
  "Stonewall, site of 1969 Stonewall riots which began gay rights movement. https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Stonewall_Inn_2012_with_gay-pride_flags_and_banner.jpg/240px-Stonewall_Inn_2012_with_gay-pride_flags_and_banner.jpg",
  "St. Bartholomew's Church and Community House, a pivotal example of the work of Bertram Grosvenor Goodhue and an outstanding example of early 20th-century ecclesiastical architecture. https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/St_Bartholomew_Church.JPG/240px-St_Bartholomew_Church.JPG",
  "Surrogate's Court, probate Courthouse across from NYC's city hall. https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NYC_Surrogate%27s_Courthouse.jpg/240px-NYC_Surrogate%27s_Courthouse.jpg",
  "Tenement Building at 97 Orchard Street, preserved tenement building that housed hundreds of immigrants; now the heart of the Lower East Side Tenement Museum. https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/New_York_Lower_East_Side_Tenement_Museum%E2%80%99s_landmark_tenement_building_at_97_Orchard_Street.jpg/240px-New_York_Lower_East_Side_Tenement_Museum%E2%80%99s_landmark_tenement_building_at_97_Orchard_Street.jpg",
  "Third Judicial District Courthouse, originally built as the Third Judicial District Courthouse; faced with demolition, public outcry led to its reuse as a branch of the New York Public Library. https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Jefferson_market.jpg/240px-Jefferson_market.jpg",
  "Tiffany and Company Building, served as the home of Tiffany and Company from 1905 through 1940. https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/WTM3_NYU_FC_2_0075.jpg/240px-WTM3_NYU_FC_2_0075.jpg",
  "Samuel J. Tilden House, home of Samuel J. Tilden, former New York State governor and loser of the bitter 1876 presidential election. https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/National-arts-club.jpg/240px-National-arts-club.jpg",
  "The Town Hall, America's Town Meetings of the Air radio programs from here in the 1930s created public-affairs media. https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Ny-town-hall.jpg/240px-Ny-town-hall.jpg",
  "Triangle Shirtwaist Factory, site of the Triangle Shirtwaist Factory fire, one of the worst industrial disasters in the US, which led to many workplace reforms. https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Asch-brown-triangle-shirtwaist-fire-building.JPG/240px-Asch-brown-triangle-shirtwaist-fire-building.JPG",
  "Trinity Church, historic church which looks down Wall Street. https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Trinity_Church_NYC_004b.JPG/240px-Trinity_Church_NYC_004b.JPG",
  "Old New York County Courthouse, istoric courthouse, more commonly known as the Tweed Courthouse, connected to Tammany Hall, now used by NYC's Department of Education. https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Tweed_Courthouse_north_main_facade_118443pv.jpg/240px-Tweed_Courthouse_north_main_facade_118443pv.jpg",
  "Union Square, the political heart of Manhattan; many protests begin or end here. https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Union_Square_New_York_by_David_Shankbone.jpg/240px-Union_Square_New_York_by_David_Shankbone.jpg",
  "United Charities Building, built in 1893 by a wealthy businessman in order to provide his favorite charities a low cost location for their operations. https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/United-charities-building.jpg/240px-United-charities-building.jpg",
  "United Workers Cooperatives, built in 1926 by the United Workers' Association to improve the living standards of its members, many of whom lived in squalid conditions in the tenements of the Lower East Side. https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/United_Workers_Cooperatives%2C_2700-2870_Bronx_Park_E%2C_Bronx_County%2C_New_York.JPG/240px-United_Workers_Cooperatives%2C_2700-2870_Bronx_Park_E%2C_Bronx_County%2C_New_York.JPG",
  "U.S. Customhouse, Cass Gilbert designed Customhouse for New York Harbor; now part of the Smithsonian Institution. https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Us-customhouse.jpg/240px-Us-customhouse.jpg",
  "University Heights Campus, collection of Beaux Arts buildings by Stanford White is one of the best examples of that style anywhere. https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/NYU_library2_crop.jpg/240px-NYU_library2_crop.jpg",
  "Van Cortlandt House, mansion for the Van Cortlandt family built in 1748 and used during the American Revolution. https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Van_Cortlandt_Mansion.jpg/240px-Van_Cortlandt_Mansion.jpg",
  "Voorlezer's House, oldest known surviving schoolhouse in America; owned by the Staten Island historical society. https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Vorleezer-house.jpg/240px-Vorleezer-house.jpg",
  "Wards Point Archeological Site, archaeological site in Conference House Park containing prehistoric remains. https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Vicinity-of-wards-point-site.JPG/240px-Vicinity-of-wards-point-site.JPG",
  "Woodlawn Cemetery, illustrates transition from rural cemetery to 20th-century styles; notable dead buried here include Robert Moses and R.H. Macy. https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Woodlawn_Cemetery_Bronx_008.jpg/240px-Woodlawn_Cemetery_Bronx_008.jpg",
  "Woolworth Building, one of the oldest —and most famous — skyscrapers in New York City; one of the tallest buildings in the New York City. https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/View_of_Woolworth_Building_fixed.jpg/240px-View_of_Woolworth_Building_fixed.jpg",
  "Wyckoff House, oldest surviving Dutch saltbox frame house in America. https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Wyckoff-house.jpg/240px-Wyckoff-house.jpg",
  "Wyckoff-Bennett Homestead, housed Hessian soldiers during the American Revolution. https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Wyckoff-bennett-homestead.jpg/240px-Wyckoff-bennett-homestead.jpg"
]

//Tweet one time
tweetIt();

//Tweet once every 60 seconds
setInterval(tweetIt, 1000*60);

function tweetIt() {

  function chooseLandmark(landmarkArray) {
    return landmarkArray[Math.floor(Math.random() * landmarkArray.length)]
  }

  let landmark = chooseLandmark(landmarkArray);

  let tweet = 'Remember the' + ' ' + landmark;

  T.post('statuses/update',{status: tweet}, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("Something went wrong!");
    } else {
      console.log("It worked!")
    }
  }
}
