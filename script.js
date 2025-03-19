// Data structure to hold all batches and their locations
const batchData = [
    // Batch 1 - City Campus - 12:30
    {
        name: "City Campus - Batch 1",
        time: "12:30",
        date: "27/3/2025",
        campus: "city",
        locations: [
            { venue: "UGCS Lab 3 - Main", range: [10885468, 22305018], center: "UGCS LAB CENTRE" },
            { venue: "UGCS Lab 4A", range: [22305596, 22307980], center: "UGCS LAB CENTRE" },
            { venue: "UGCS Lab 4B", range: [22308047, 22329299], center: "UGCS LAB CENTRE" },
            { venue: "BALME: Knowledge Commons", range: [22329325, 22377737], center: "BALME LIBRARY CENTRE" },
            { venue: "BALME: IAC Training Lab", range: [22377784, 22380866], center: "BALME LIBRARY CENTRE" },
            { venue: "Dept. of Information Studies - Lab 1", range: [22380900, 22382968], center: "INFORMATION STUDIES LAB" },
            { venue: "Dept. of Information Studies - Lab 2", range: [22383009, 22384944], center: "INFORMATION STUDIES LAB" },
            { venue: "J. R. A ICT Centre", range: [22385058, 22387543], center: "Next to Kofi Dra Conf. Centre (Behind Psyc. Dept)" }
        ]
    },
    // Batch 2 - Mixed Campus - 13:00
    {
        name: "City/Main Campus - Batch 2",
        time: "13:00",
        date: "27/3/2025",
        campus: "both",
        locations: [
            { venue: "UGCS Lab 3 - Main", range: [22387662, 22399641], campus: "city", center: "UGCS LAB CENTRE" },
            { venue: "UGCS Lab 4A", range: [22399650, 22403559], campus: "city", center: "UGCS LAB CENTRE" },
            { venue: "UGCS Lab 4B", range: [22403719, 22406272], campus: "city", center: "UGCS LAB CENTRE" },
            { venue: "BALME: Knowledge Commons", range: [22406310, 22416319], campus: "city", center: "BALME LIBRARY CENTRE" },
            { venue: "BALME: IAC Training Lab", range: [10485075, 22020463], campus: "main", center: "BALME LIBRARY CENTRE" },
            { venue: "Dept. of Information Studies - Lab 1", range: [22033605, 22145556], campus: "main", center: "INFORMATION STUDIES LAB" },
            { venue: "Dept. of Information Studies - Lab 2", range: [22197191, 22262625], campus: "main", center: "INFORMATION STUDIES LAB" },
            { venue: "J. R. A ICT Centre", range: [22262635, 22263772], campus: "main", center: "Next to Kofi Dra Conf. Centre (Behind Psyc. Dept)" }
        ]
    },
    // Batch 3 - Main Campus - 14:30
    {
        name: "Main Campus - Batch 3",
        time: "14:30",
        date: "27/3/2025",
        campus: "main",
        locations: [
            { venue: "UGCS Lab 3 - Main", range: [22263921, 22300081], center: "UGCS LAB CENTRE" },
            { venue: "UGCS Lab 4A", range: [22300087, 22301862], center: "UGCS LAB CENTRE" },
            { venue: "UGCS Lab 4B", range: [22301881, 22303230], center: "UGCS LAB CENTRE" },
            { venue: "BALME: Knowledge Commons", range: [22303241, 22307810], center: "BALME LIBRARY CENTRE" },
            { venue: "BALME: IAC Training Lab", range: [22307817, 22308746], center: "BALME LIBRARY CENTRE" },
            { venue: "Dept. of Information Studies - Lab 1", range: [22308751, 22309644], center: "INFORMATION STUDIES LAB" },
            { venue: "Dept. of Information Studies - Lab 2", range: [22309689, 22310332], center: "INFORMATION STUDIES LAB" },
            { venue: "J. R. A ICT Centre", range: [22310349, 22318795], center: "Next to Kofi Dra Conf. Centre (Behind Psyc. Dept)" }
        ]
    },
    // Batch 4 - Main Campus - 15:00
    {
        name: "Main Campus - Batch 4",
        time: "15:00",
        date: "27/3/2025",
        campus: "main",
        locations: [
            { venue: "UGCS Lab 3 - Main", range: [22319150, 22368681], center: "UGCS LAB CENTRE" },
            { venue: "UGCS Lab 4A", range: [22368815, 22370240], center: "UGCS LAB CENTRE" },
            { venue: "UGCS Lab 4B", range: [22370309, 22372017], center: "UGCS LAB CENTRE" },
            { venue: "BALME: Knowledge Commons", range: [22372080, 22376757], center: "BALME LIBRARY CENTRE" },
            { venue: "BALME: IAC Training Lab", range: [22376759, 22377575], center: "BALME LIBRARY CENTRE" },
            { venue: "Dept. of Information Studies - Lab 1", range: [22377612, 22378482], center: "INFORMATION STUDIES LAB" },
            { venue: "Dept. of Information Studies - Lab 2", range: [22378524, 22379895], center: "INFORMATION STUDIES LAB" },
            { venue: "J. R. A ICT Centre", range: [22379928, 22380913], center: "Next to Kofi Dra Conf. Centre (Behind Psyc. Dept)" }
        ]
    },
    // Batch 5 - Main Campus - 16:00
    {
        name: "Main Campus - Batch 5",
        time: "16:00",
        date: "27/3/2025",
        campus: "main",
        locations: [
            { venue: "UGCS Lab 3 - Main", range: [22400220, 22404763], center: "UGCS LAB CENTRE" },
            { venue: "UGCS Lab 4A", range: [22404768, 22405921], center: "UGCS LAB CENTRE" },
            { venue: "UGCS Lab 4B", range: [22405922, 22407224], center: "UGCS LAB CENTRE" },
            { venue: "BALME: Knowledge Commons", range: [22407231, 22412880], center: "BALME LIBRARY CENTRE" },
            { venue: "BALME: IAC Training Lab", range: [22412888, 22413579], center: "BALME LIBRARY CENTRE" },
            { venue: "Dept. of Information Studies - Lab 1", range: [22413610, 22414551], center: "INFORMATION STUDIES LAB" },
            { venue: "Dept. of Information Studies - Lab 2", range: [22414587, 22415318], center: "INFORMATION STUDIES LAB" },
            { venue: "J. R. A ICT Centre", range: [22415426, 22416458], center: "Next to Kofi Dra Conf. Centre (Behind Psyc. Dept)" }
        ]
    }
];

// Global variable to store filtered batches
let filteredBatches = [...batchData];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    generateBatchButtons();
    generateBatchContainers();

    // Add event listeners
    document.getElementById('findButton').addEventListener('click', findLocation);
    document.getElementById('studentId').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            findLocation();
        }
    });
    document.getElementById('campus-select').addEventListener('change', filterBatchesByCampus);
});

// Function to filter batches by campus
function filterBatchesByCampus() {
    const campusSelect = document.getElementById('campus-select');
    const selectedCampus = campusSelect.value;
    
    if (selectedCampus === 'all') {
        filteredBatches = [...batchData];
    } else {
        filteredBatches = batchData.filter(batch => {
            if (batch.campus === selectedCampus || batch.campus === 'both') {
                return true;
            }
            return false;
        });
    }
    
    // Regenerate batch buttons and containers
    generateBatchButtons();
    generateBatchContainers();
}

// Function to generate batch buttons
function generateBatchButtons() {
    const container = document.getElementById('batch-toggle');
    container.innerHTML = '';
    
    filteredBatches.forEach((batch, index) => {
        const button = document.createElement('button');
        button.className = 'batch-btn';
        button.onclick = function() { showBatchDetails(index); };
        
        let campusLabel = '';
        if (batch.campus === 'city') {
            campusLabel = 'City Campus';
        } else if (batch.campus === 'main') {
            campusLabel = 'Main Campus';
        } else {
            campusLabel = 'City/Main Campus';
        }
        
        button.innerHTML = `${campusLabel}<br>${batch.time}`;
        container.appendChild(button);
    });
}

// Function to generate batch detail containers
function generateBatchContainers() {
    const container = document.getElementById('batch-containers');
    container.innerHTML = '';
    
    filteredBatches.forEach((batch, index) => {
        const batchDiv = document.createElement('div');
        batchDiv.className = 'batch-details';
        batchDiv.id = `batch${index}`;
        
        let batchHtml = `<h3>${batch.name} - ${batch.time}</h3><ul class="location-list">`;
        
        batch.locations.forEach(location => {
            const campusText = location.campus ? 
                `(${location.campus === 'city' ? 'City Campus' : 'Main Campus'})` : 
                '';
                
            batchHtml += `
                <li class="location-item">
                    <strong>${location.venue} ${campusText}</strong> → ID Range: ${location.range[0]}-${location.range[1]}
                    <div class="time-date">Time: ${batch.time} | Date: ${batch.date} | ${location.center}</div>
                </li>
            `;
        });
        
        batchHtml += `</ul>`;
        batchDiv.innerHTML = batchHtml;
        container.appendChild(batchDiv);
    });
}

function findLocation() {
    const studentId = document.getElementById('studentId').value.trim();
    const result = document.getElementById('result');
    const campusSelect = document.getElementById('campus-select');
    const selectedCampus = campusSelect.value;
    
    // Basic validation
    if (!studentId || isNaN(studentId)) {
        result.className = "result error";
        result.innerHTML = "Please enter a valid student ID number.";
        return;
    }
    
    const idNumber = parseInt(studentId);
    let found = false;
    let batchIndex = -1;
    let venueInfo = null;
    let batchInfo = null;
    
    // Search through all batches
    for (let i = 0; i < batchData.length; i++) {
        const batch = batchData[i];
        
        // Skip batches that don't match the selected campus
        if (selectedCampus !== 'all' && batch.campus !== selectedCampus && batch.campus !== 'both') {
            continue;
        }
        
        for (let j = 0; j < batch.locations.length; j++) {
            const location = batch.locations[j];
            
            // Skip locations that don't match the selected campus for 'both' campus batches
            if (selectedCampus !== 'all' && batch.campus === 'both' && 
                location.campus && location.campus !== selectedCampus) {
                continue;
            }
            
            if (idNumber >= location.range[0] && idNumber <= location.range[1]) {
                found = true;
                batchInfo = batch;
                venueInfo = location;
                
                // Find the index in filteredBatches
                batchIndex = filteredBatches.findIndex(b => 
                    b.name === batch.name && b.time === batch.time);
                break;
            }
        }
        
        if (found) break;
    }
    
    if (found) {
        // If found but not in filtered batches, switch to 'all' campuses
        if (batchIndex === -1) {
            campusSelect.value = 'all';
            filterBatchesByCampus();
            // Re-find the batch index
            batchIndex = filteredBatches.findIndex(b => 
                b.name === batchInfo.name && b.time === batchInfo.time);
        }
        
        const campusText = venueInfo.campus ? 
            (venueInfo.campus === 'city' ? 'City Campus' : 'Main Campus') : 
            batchInfo.name.split(' - ')[0];
        
        result.className = "result success";
        result.innerHTML = `
            <h3>Your Exam Location Found!</h3>
            <div class="student-info">
                <div class="info-item"><strong>Student ID:</strong> ${studentId}</div>
                <div class="info-item"><strong>Batch:</strong> ${batchInfo.name}</div>
                <div class="info-item"><strong>Time:</strong> ${batchInfo.time}</div>
                <div class="info-item"><strong>Date:</strong> ${batchInfo.date}</div>
            </div>
            <p style="margin-top:15px"><strong>Exam Venue:</strong> <span class="highlight">${venueInfo.venue}</span></p>
            <p><strong>Center:</strong> ${venueInfo.center}</p>
            <p><strong>Campus:</strong> ${campusText}</p>
            <p><strong>ID Range:</strong> ${venueInfo.range[0]}-${venueInfo.range[1]}</p>
            <p style="margin-top:10px">Please arrive at least 30 minutes before your scheduled exam time.</p>
        `;
        
        // Show the corresponding batch details and highlight the venue
        showBatchDetails(batchIndex, venueInfo.venue);
    } else {
        result.className = "result error";
        result.innerHTML = `
            <h3>Location Not Found</h3>
            <p>No matching exam location was found for ID ${studentId}.</p>
            <p>Please verify your student ID or contact the Psychology Department for assistance.</p>
        `;
    }
}

function showBatchDetails(batchIndex, highlightVenue = null) {
    // Hide all batch details
    const batchElements = document.querySelectorAll('.batch-details');
    batchElements.forEach(el => el.style.display = 'none');
    
    // Show selected batch
    const selectedBatch = document.getElementById(`batch${batchIndex}`);
    if (selectedBatch) {
        selectedBatch.style.display = 'block';
        
        // Update active batch button
        const batchBtns = document.querySelectorAll('.batch-btn');
        batchBtns.forEach((btn, index) => {
            if (index === batchIndex) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Reset all location items
        const locationItems = document.querySelectorAll('.location-item');
        locationItems.forEach(item => item.classList.remove('active'));
        
        // Highlight the specific venue if provided
        if (highlightVenue) {
            const venues = document.querySelectorAll(`#batch${batchIndex} .location-item`);
            venues.forEach(venue => {
                if (venue.textContent.includes(highlightVenue)) {
                    venue.classList.add('active');
                    setTimeout(() => {
                        venue.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 300);
                }
            });
        }
    }
}