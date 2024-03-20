function Calendar() {
    return (
        <div className="bg-white w-11/12 h-5/6 flex flex-col items-center rounded-lg shadow-md">
            <div className="w-full h-full flex flex-col justify-evenly rounded-lg p-6">
                <div className="text-center mb-4">
                    <h2 className="text-3xl font-semibold">March 2024</h2>
                </div>
                <div className="flex justify-between text-center mb-4 text-lg">
                    <div className="w-1/7">Sunday</div>
                    <div className="w-1/7">Monday</div>
                    <div className="w-1/7">Tuesday</div>
                    <div className="w-1/7">Wednesday</div>
                    <div className="w-1/7">Thursday</div>
                    <div className="w-1/7">Friday</div>
                    <div className="w-1/7">Saturday</div>
                </div>
                <div className="grid grid-cols-7 gap-4 text-lg">                    
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">-</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">-</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">-</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">-</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">1</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">2</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">3</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">4</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">5</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">6</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">7</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">8</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">9</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">10</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">11</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">12</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">13</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">14</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">15</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">16</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">17</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">18</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">19</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">20</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">21</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">22</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">23</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">24</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">25</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">26</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">27</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">28</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">29</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">30</div>
                    <div className="text-center py-2 hover:bg-gray-200 rounded-lg">31</div>
                </div>
            </div>
        </div>
    )
}

export default Calendar