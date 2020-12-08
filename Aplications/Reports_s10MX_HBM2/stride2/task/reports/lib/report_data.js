var areaJSON='{"columns":["", "ALUTs", "FFs", "RAMs", "DSPs", "MLABs", "Details"], "debug_enabled":"true", "type":"module", "total_percent":[2.17711, 1.16725, 1.08571, 2.21995, 0], "total":[16285, 30518, 152, 0, 6], "name":"Kernel System", "max_resources":[1405440, 2810880, 6847, 3960, 70272], "children":[{"name":"Static Partition", "type":"partition", "children":[{"name":"Board interface", "type":"resource", "data":[13132, 20030, 112, 0, 0], "details":[{"type":"text", "text":"Platform interface logic."}]}]}, {"name":"Global interconnect", "type":"resource", "data":[555, 2966, 0, 0, 0], "details":[{"type":"text", "text":"Global interconnect for 0 global loads and 1 global store."}, {"type":"brief", "text":"For 0 global loads and 1 global store."}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Global Memory Interconnect", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#hnj1476724450050"}]}]}, {"name":"System description ROM", "type":"resource", "data":[2, 71, 2, 0, 0], "details":[{"type":"text", "text":"This read-only memory contains information for the host about the system and about each kernel in the system, including kernel names, arguments, and attributes. The system description ROM ensures that the binary image on the FPGA is compatible with the host program."}, {"type":"brief", "text":"Contains information for the host."}]}, {"name":"test_multiplereads", "compute_units":1, "type":"function", "total_percent":[0.454301, 0.193249, 0.265077, 0.554988, 0], "total_kernel_resources":[2596, 7451, 38, 0, 6], "details":[{"type":"text", "text":"Number of compute units: 1"}, {"type":"text", "text":"Kernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality."}, {"type":"brief", "text":"1 compute unit.\\nKernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality."}], "children":[{"name":"Function overhead", "type":"resource", "data":[1463, 1467, 0, 0, 6], "details":[{"type":"text", "text":"Kernel dispatch logic."}, {"type":"brief", "text":"Kernel dispatch logic."}]}, {"name":"Private Variable: \\n - \'j\' (test_bw10_delta.cl:44)", "type":"resource", "data":[16, 130, 0, 0, 0], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "details":[{"type":"text", "text":"Type: Register"}, {"type":"text", "text":"1 register of width 32"}, {"type":"text", "text":"1 register of width 33"}, {"type":"brief", "text":"Register,\\n1 reg, 32 width,\\n1 reg, 33 width"}]}, {"name":"test_multiplereads.B0", "type":"basicblock", "children":[{"name":"State", "type":"resource", "data":[0, 100, 0, 0, 0], "details":[{"type":"brief", "text":"Live values and control logic"}, {"type":"text", "text":"Resources for live values and control logic. To reduce this area:", "details":[{"type":"text", "text":"reduce size of local variables"}, {"type":"text", "text":"reduce scope of local variables, localizing them as much as possible"}, {"type":"text", "text":"reduce number of nested loops"}]}], "children":[{"name":"No Source Line", "type":"resource", "data":[0, 67, 0, 0, 0]}, {"name":"test_bw10_delta.cl:44", "type":"resource", "data":[0, 33, 0, 0, 0], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]]}]}, {"name":"Cluster logic", "type":"resource", "data":[10, 9, 1, 0, 0], "details":[{"type":"brief", "text":"Logic required to efficiently support sets of operations that do not stall"}, {"type":"text", "text":"Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."}]}, {"name":"Computation", "type":"resource", "children":[{"name":"test_bw10_delta.cl:44", "type":"resource", "data":[132, 33, 0, 0, 0], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "children":[{"name":"32-bit Integer Add", "type":"resource", "count":1, "data":[32, 0, 0, 0, 0]}, {"name":"32-bit Integer Compare", "type":"resource", "count":1, "data":[35, 1, 0, 0, 0]}, {"name":"32-bit Select", "type":"resource", "count":1, "data":[32, 32, 0, 0, 0]}, {"name":"33-bit Integer Add", "type":"resource", "count":1, "data":[33, 0, 0, 0, 0]}], "replace_name":"true"}]}]}, {"name":"test_multiplereads.B1", "type":"basicblock", "children":[{"name":"State", "type":"resource", "data":[29, 134, 1, 0, 0], "details":[{"type":"brief", "text":"Live values and control logic"}, {"type":"text", "text":"Resources for live values and control logic. To reduce this area:", "details":[{"type":"text", "text":"reduce size of local variables"}, {"type":"text", "text":"reduce scope of local variables, localizing them as much as possible"}, {"type":"text", "text":"reduce number of nested loops"}]}], "children":[{"name":"No Source Line", "type":"resource", "data":[29, 134, 1, 0, 0]}]}, {"name":"Feedback", "type":"resource", "data":[49, 9, 0, 0, 0], "details":[{"type":"brief", "text":"Loop-carried dependencies"}, {"type":"text", "text":"Resources for loop-carried dependencies. To reduce this area:", "details":[{"type":"text", "text":"reduce number and size of loop-carried variables"}]}], "children":[{"name":"test_bw10_delta.cl:44", "type":"resource", "data":[49, 9, 0, 0, 0], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]]}]}, {"name":"Cluster logic", "type":"resource", "data":[111, 204, 5, 0, 0], "details":[{"type":"brief", "text":"Logic required to efficiently support sets of operations that do not stall"}, {"type":"text", "text":"Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."}]}, {"name":"Computation", "type":"resource", "children":[{"name":"No Source Line", "type":"resource", "data":[64, 0, 0, 0, 0], "debug":[[{"filename":"", "line":0}]], "children":[{"name":"128-bit And", "type":"resource", "count":1, "data":[64, 0, 0, 0, 0]}]}, {"name":"test_bw10_delta.cl:44", "type":"resource", "data":[116, 1, 0, 0, 0], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "children":[{"name":"1-bit And", "type":"resource", "count":1, "data":[1, 0, 0, 0, 0]}, {"name":"1-bit Xor", "type":"resource", "count":2, "data":[1, 1, 0, 0, 0]}, {"name":"32-bit Integer Add", "type":"resource", "count":1, "data":[32, 0, 0, 0, 0]}, {"name":"32-bit Integer Compare", "type":"resource", "count":1, "data":[11, 0, 0, 0, 0]}, {"name":"33-bit Integer Add", "type":"resource", "count":1, "data":[33, 0, 0, 0, 0]}, {"name":"33-bit Integer Compare", "type":"resource", "count":1, "data":[11, 0, 0, 0, 0]}, {"name":"33-bit Select", "type":"resource", "count":2, "data":[27, 0, 0, 0, 0]}], "replace_name":"true"}, {"name":"test_bw10_delta.cl:47", "type":"resource", "data":[606, 5364, 31, 0, 0], "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "children":[{"name":"Store", "type":"resource", "count":1, "data":[606, 5364, 31, 0, 0], "details":[{"type":"text", "text":"Store uses a Burst-coalesced LSU"}, {"type":"brief", "text":"Burst-coalesced LSU"}]}], "replace_name":"true"}]}]}]}]}';
var area_srcJSON='{"children":[{"children":[{"data":[13132,20030,112,0,0],"details":[{"text":"Platform interface logic.","type":"text"}],"name":"Board interface","type":"resource"}],"name":"Static Partition","type":"partition"},{"data":[555,2966,0,0,0],"details":[{"text":"Global interconnect for 0 global loads and 1 global store.","type":"text"},{"text":"For 0 global loads and 1 global store.","type":"brief"},{"links":[{"guide":"Best Practices Guide : Global Memory Interconnect","link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#hnj1476724450050"}],"text":"See %L for more information","type":"text"}],"name":"Global interconnect","type":"resource"},{"data":[2,71,2,0,0],"details":[{"text":"This read-only memory contains information for the host about the system and about each kernel in the system, including kernel names, arguments, and attributes. The system description ROM ensures that the binary image on the FPGA is compatible with the host program.","type":"text"},{"text":"Contains information for the host.","type":"brief"}],"name":"System description ROM","type":"resource"},{"children":[{"data":[170,222,6,0,0],"details":[{"text":"Feedback+Cluster logic","type":"brief"}],"name":"Data control overhead","type":"resource"},{"data":[1463,1467,0,0,6],"details":[{"text":"Kernel dispatch logic.","type":"text"},{"text":"Kernel dispatch logic.","type":"brief"}],"name":"Function overhead","type":"resource"},{"data":[16,130,0,0,0],"details":[{"text":"Type: Register","type":"text"},{"text":"1 register of width 32","type":"text"},{"text":"1 register of width 33","type":"text"},{"text":"Register,\\n1 reg, 32 width,\\n1 reg, 33 width","type":"brief"}],"name":"Private Variable: \\n - \'j\' (test_bw10_delta.cl:44)","type":"resource"},{"children":[{"count":2,"data":[29,201,1,0,0],"debug":[[{"filename":"","line":0}]],"name":"State","type":"resource"},{"count":1,"data":[64,0,0,0,0],"debug":[[{"filename":"","line":0}]],"name":"128-bit And","type":"resource"}],"data":[93,201,1,0,0],"name":"No Source Line","type":"resource"},{"children":[{"count":1,"data":[0,33,0,0,0],"debug":[[{"filename":"test_bw10_delta.cl","line":44}]],"name":"State","type":"resource"},{"count":2,"data":[64,0,0,0,0],"debug":[[{"filename":"test_bw10_delta.cl","line":44}]],"name":"32-bit Integer Add","type":"resource"},{"count":2,"data":[46,1,0,0,0],"debug":[[{"filename":"test_bw10_delta.cl","line":44}]],"name":"32-bit Integer Compare","type":"resource"},{"count":1,"data":[32,32,0,0,0],"debug":[[{"filename":"test_bw10_delta.cl","line":44}]],"name":"32-bit Select","type":"resource"},{"count":2,"data":[66,0,0,0,0],"debug":[[{"filename":"test_bw10_delta.cl","line":44}]],"name":"33-bit Integer Add","type":"resource"},{"count":1,"data":[1,0,0,0,0],"debug":[[{"filename":"test_bw10_delta.cl","line":44}]],"name":"1-bit And","type":"resource"},{"count":2,"data":[1,1,0,0,0],"debug":[[{"filename":"test_bw10_delta.cl","line":44}]],"name":"1-bit Xor","type":"resource"},{"count":1,"data":[11,0,0,0,0],"debug":[[{"filename":"test_bw10_delta.cl","line":44}]],"name":"33-bit Integer Compare","type":"resource"},{"count":2,"data":[27,0,0,0,0],"debug":[[{"filename":"test_bw10_delta.cl","line":44}]],"name":"33-bit Select","type":"resource"}],"data":[248,67,0,0,0],"debug":[[{"filename":"test_bw10_delta.cl","line":44}]],"name":"test_bw10_delta.cl:44","type":"resource"},{"children":[{"count":1,"data":[606,5364,31,0,0],"debug":[[{"filename":"test_bw10_delta.cl","line":47}]],"name":"Store","type":"resource"}],"data":[606,5364,31,0,0],"debug":[[{"filename":"test_bw10_delta.cl","line":47}]],"name":"test_bw10_delta.cl:47","replace_name":"true","type":"resource"}],"compute_units":1,"data":[2596,7451,38,0,6],"debug":[[{"filename":"test_bw10_delta.cl","line":44}]],"details":[{"text":"Number of compute units: 1","type":"text"},{"text":"Kernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality.","type":"text"},{"text":"1 compute unit.\\nKernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality.","type":"brief"}],"name":"test_multiplereads","total_kernel_resources":[2596,7451,38,0,6],"total_percent":[0.454301,0.193249,0.265077,0.554988,0],"type":"function"}],"columns":["","ALUTs","FFs","RAMs","DSPs","MLABs","Details"],"data":[3153,10488,40,0,6],"debug_enabled":"true","max_resources":[1405440,2810880,6847,3960,70272],"name":"Kernel System","total":[16285,30518,152,0,6],"total_percent":[2.17711,1.16725,1.08571,2.21995,0],"type":"module"}';
var mavJSON='{"nodes":[{"type":"kernel", "id":2, "name":"test_multiplereads", "children":[{"type":"bb", "id":3, "name":"test_multiplereads.B0", "details":[{"type":"table", "Latency":"35"}]}, {"type":"bb", "id":4, "name":"test_multiplereads.B1", "children":[{"type":"inst", "id":6, "name":"Store", "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "details":[{"type":"table", "Width":"1024 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Start Cycle":"39", "Latency":"64", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":7, "name":"Loop Input", "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "details":[{"type":"table", "Start Cycle":"0", "Latency":"1", "Loops To":"8"}]}, {"type":"inst", "id":8, "name":"Loop End", "details":[{"type":"table", "Start Cycle":"103", "Latency":"1"}]}], "details":[{"type":"table", "Latency":"103", "II":"1", "Subloops":"No", "Pipelined":"Yes", "Fmax Bottlenecks":"No", "Loop Info":""}]}, {"type":"bb", "id":5, "name":"test_multiplereads.B2", "details":[{"type":"table", "Latency":"0"}]}]}, {"type":"memtype", "id":1, "name":"Global Memory", "children":[{"type":"memsys", "id":9, "name":"HBM10", "details":[{"type":"table", "Number of banks":"1"}]}]}], "links":[{"from":3, "to":7}, {"from":6, "to":8}, {"from":8, "to":5}, {"from":7, "to":6}, {"from":6, "to":9}]}';
var loopsJSON='{"columns":["", "Pipelined", "II", "Speculated iterations", "Details"], "children":[{"name":"Kernel: test_multiplereads", "data":["", "", ""], "debug":[[{"filename":"test_bw10_delta.cl", "line":9}]], "details":[{"type":"brief", "text":"Single work-item execution"}, {"type":"text", "text":"Single work-item execution"}, {"type":"text", "text":"Fmax bottlenck block: None"}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Kernels", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#ipp1476408832230"}]}], "children":[{"name":"test_multiplereads.B1", "data":["Yes", "~1", "4"], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "details":[{"type":"brief", "text":" "}, {"type":"text", "text":"Hyper-Optimized loop structure: enabled."}, {"type":"text", "text":"II is an approximation due to the following stallable instruction:", "details":[{"type":"text", "text":"Store Operation (%L)", "links":[{"filename":"test_bw10_delta.cl", "line":"47"}]}]}, {"type":"text", "text":"Maximum concurrent iterations: Capacity of loop", "details":[{"type":"text", "text":"Use the %L viewer to estimate capacity", "links":[{"view":"Fmax II Report"}]}]}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Loops in a Single Work-Item Kernel", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#wfa1476380079940"}]}], "children":[{"name":"Fully unrolled loop", "data":["n/a", "n/a", "n/a"], "debug":[[{"filename":"test_bw10_delta.cl", "line":46}]], "details":[{"type":"brief", "text":"Unrolled by #pragma unroll"}, {"type":"text", "text":"Unrolled by #pragma unroll"}], "children":[]}]}]}]}';
var fmax_iiJSON='{"basicblocks":{"test_multiplereads.B0":{"name":"test_multiplereads.B0", "target_fmax":"Not specified", "target_ii":"Not specified", "achieved_fmax":"480.0", "achieved_ii":1, "latency":35, "max_interleaving":1, "is_fmax_bottleneck":"No", "is_loop_header":"No", "is_single_block_loop":"No", "loop_layer":0, "loop_location":{}}, "test_multiplereads.B1":{"name":"test_multiplereads.B1", "target_fmax":"Not specified", "target_ii":"Not specified", "achieved_fmax":"480.0", "achieved_ii":1, "latency":103, "max_interleaving":1, "is_fmax_bottleneck":"No", "is_loop_header":"Yes", "is_single_block_loop":"Yes", "loop_layer":1, "loop_location":{"details":[{"type":"text", "text":"Loop:  (%L)", "links":[{"filename":"test_bw10_delta.cl", "line":"44"}]}]}}, "test_multiplereads.B2":{"name":"test_multiplereads.B2", "target_fmax":"Not specified", "target_ii":"Not specified", "achieved_fmax":"480.0", "achieved_ii":1, "latency":0, "max_interleaving":1, "is_fmax_bottleneck":"No", "is_loop_header":"No", "is_single_block_loop":"No", "loop_layer":0, "loop_location":{}}}, "functions":{"test_multiplereads":{"debug":[{"filename":"test_bw10_delta.cl", "line":9}], "loop_hierachy":{"test_multiplereads__no_loop":["test_multiplereads.B0", "test_multiplereads.B2"], "test_multiplereads.B1":["test_multiplereads.B1"]}}}}';
var summaryJSON='{"performanceSummary":{"name":"Kernel Summary", "columns":["Kernel Name", "Kernel Type", "Autorun", "Workgroup Size", "# Compute Units", "Hyper-Optimized Handshaking"], "children":[{"name":"test_multiplereads", "data":["Single work-item", "No", [1, 1, 1], 1, "On"], "details":[{"type":"text", "text":"Kernel type: Single work-item"}, {"type":"text", "text":"Required workgroup size: (1, 1, 1)"}, {"type":"text", "text":"Maximum workgroup size: 1"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":9}]]}]}, "estimatedResources":{"name":"Estimated Resource Usage", "columns":["Kernel Name", "ALUTs ", "FFs  ", "RAMs ", "DSPs ", "MLABs"], "children":[{"name":"test_multiplereads", "data":[2596, 7451, 38, 0, 6], "debug":[[{"filename":"test_bw10_delta.cl", "line":9}]]}, {"name":"Global Interconnect", "classes":["summary-highlight", "nohover"], "data":[555, 2966, 0, 0, 0]}, {"name":"Board Interface", "classes":["summary-highlight", "nohover"], "data":[13132, 20030, 112, 0, 0]}, {"name":"System description ROM", "classes":["summary-highlight", "nohover"], "data":[2, 71, 2, 0, 0]}, {"name":"Total", "classes":["summary-highlight", "nohover"], "data":[16285, 30518, 152, 0, 6], "data_percent":[1.15871, 1.08571, 2.21995, 0]}, {"name":"Available", "classes":["summary-highlight", "nohover"], "data":[1405440, 2810880, 6847, 3960, 0]}]}, "compileWarnings":{"name":"Compile Warnings", "children":[]}}';
var infoJSON='{"name":"Info","rows":[{"classes":["info-table"],"data":["testCA_2_0_V8_MX"],"name":"Project Name"},{"data":["Stratix 10, 1SM21BHU2F53E2VGS1, s10mx_ref:s10mx_hbm_es"],"name":"Target Family, Device, Board"},{"data":["19.4.0 Build 64"],"name":"AOC Version"},{"data":["19.4.0 Build 64 Pro"],"name":"Quartus Version"},{"data":["aoc -profile=all -report -v -D INPUTS=0 -D delta=2 test_bw10_delta.cl -board=s10mx_hbm_es -board-package=/home/angelica/Quartus/s10mx_ref -o device/testCA_2_0_V8_MX.aocx"],"name":"Command"},{"data":["Sat Sep 12 18:50:12 2020"],"name":"Reports Generated At"}]}';
var warningsJSON='{"rows":[]}';
var quartusJSON='{"quartusFitClockSummary":{  "name":"Quartus Fit Clock Summary"  ,"columns":["", "Kernel fmax"]  ,"children":[  {    "name":"Frequency (MHz)","data":[455.56]  }]},"quartusFitResourceUsageSummary":{  "name":"Quartus Fit Resource Utilization Summary"  ,"columns":["", "ALMs", "FFs", "RAMs", "DSPs", "MLABs"]  ,"children":[  {"name":"test_multiplereads","data":[3128.3 ,8634 ,36 ,0 ,0]  }]}}';
var fileJSON=[{"path":"/home/angelica/exm_MX/test_delta_SWI/test_bw10_delta.cl", "name":"test_bw10_delta.cl", "has_active_debug_locs":false, "absName":"/home/angelica/exm_MX/test_delta_SWI/test_bw10_delta.cl", "content":"//Multiple read access\012 // ACL kernel for adding two input vectors\012#define REQD_WG_SIZE (1024 * 32)\012\012//#define V 16\012//#define INPUTS 3\012//__attribute((reqd_work_group_size(REQD_WG_SIZE,1,1)))\012//__attribute((num_simd_work_items(8)))\012__kernel void test_multiplereads(__global __attribute((buffer_location(\"HBM1\"))) const float *restrict x, \012                         __global __attribute((buffer_location(\"HBM2\"))) const float *restrict y,\012						#if INPUTS >= 3\012                         __global __attribute((buffer_location(\"HBM3\"))) const float *restrict y1,\012						#endif \012						#if INPUTS >= 4\012                         __global __attribute((buffer_location(\"HBM4\"))) const float *restrict y2,\012						#endif \012\012						#if INPUTS >= 5\012                         __global __attribute((buffer_location(\"HBM5\"))) const float *restrict y3,\012						#endif \012						#if INPUTS >= 6\012                         __global __attribute((buffer_location(\"HBM6\"))) const float *restrict y4,\012						#endif \012						#if INPUTS >= 7\012                         __global __attribute((buffer_location(\"HBM7\"))) const float *restrict y5,\012						#endif \012\012						#if INPUTS >= 8\012                         __global __attribute((buffer_location(\"HBM8\"))) const float *restrict y6,\012						#endif \012						#if INPUTS >= 9\012                         __global __attribute((buffer_location(\"HBM9\"))) const float *restrict y7,\012						#endif \012\012\012                         __global __attribute((buffer_location(\"HBM10\"))) float *restrict z,\012					     uint arg)\012{\012    // get index of the work item\012    int index = get_global_id(0) * delta;\012    // add the vector elements\012	#if INPUTS == 0\012//    float transfer=0;\012	for (uint j=0; j<arg;j++){\012	#pragma unroll 16	\012		for (uint i=0; i<16;i++){\012		  z[ i*delta + j * (16*delta)]= i*delta;\012		}\012	}\012 //   z[0]=transfer;\012	//z[index]=index;\012	#elif INPUTS == 1\012    z[index] = x[index]; //+ y[index];\012	#elif INPUTS == 2\012    z[index] = x[index] + y[index];\012	#elif INPUTS == 3\012    z[index] = x[index] + y[index] + y1[index];\012	#elif INPUTS == 4\012    z[index] = x[index] + y[index] + y1[index] + y2[index];\012	#elif INPUTS == 5\012    z[index] = x[index] + y[index] + y1[index] + y2[index] + y3[index];\012	#elif INPUTS == 6 \012    z[index] = x[index] + y[index] + y1[index] + y2[index] + y3[index] + y4[index];\012	#elif INPUTS == 7\012    z[index] = x[index] + y[index] + y1[index] + y2[index] + y3[index] + y4[index] + y5[index];\012	#elif INPUTS == 8\012    z[index] = x[index] + y[index] + y1[index] + y2[index] + y3[index] + y4[index] + y5[index] + y6[index];\012	#elif INPUTS == 9\012    z[index] = x[index] + y[index] + y1[index] + y2[index] + y3[index] + y4[index] + y5[index] + y6[index] + y7[index];\012	#endif\012\012}\012\012"}];
