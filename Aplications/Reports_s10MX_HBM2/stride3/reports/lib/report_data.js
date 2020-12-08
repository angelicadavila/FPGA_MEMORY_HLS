var areaJSON='{"columns":["", "ALUTs", "FFs", "RAMs", "DSPs", "MLABs", "Details"], "debug_enabled":"true", "type":"module", "total_percent":[4.36837, 2.57144, 2.00293, 4.1332, 0.40404], "total":[33580, 56300, 283, 16, 128], "name":"Kernel System", "max_resources":[1405440, 2810880, 6847, 3960, 70272], "children":[{"name":"Static Partition", "type":"partition", "children":[{"name":"Board interface", "type":"resource", "data":[13132, 20030, 112, 0, 0], "details":[{"type":"text", "text":"Platform interface logic."}]}]}, {"name":"Global interconnect", "type":"resource", "data":[4121, 5284, 0, 0, 0], "details":[{"type":"text", "text":"Global interconnect for 2 global loads and 1 global store. Reduce number of global loads and stores to simplify global interconnect."}, {"type":"brief", "text":"For 2 global loads and 1 global store."}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Global Memory Interconnect", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#hnj1476724450050"}]}]}, {"name":"System description ROM", "type":"resource", "data":[2, 71, 2, 0, 0], "details":[{"type":"text", "text":"This read-only memory contains information for the host about the system and about each kernel in the system, including kernel names, arguments, and attributes. The system description ROM ensures that the binary image on the FPGA is compatible with the host program."}, {"type":"brief", "text":"Contains information for the host."}]}, {"name":"test_multiplereads", "compute_units":1, "type":"function", "total_percent":[2.34122, 1.34371, 1.09983, 2.46823, 0.40404], "total_kernel_resources":[16325, 30915, 169, 16, 128], "details":[{"type":"text", "text":"Number of compute units: 1"}, {"type":"text", "text":"Achieved kernel vectorization: 16"}, {"type":"text", "text":"Kernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality."}, {"type":"brief", "text":"1 compute unit.\\nAchieved kernel vectorization: 16\\nKernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality."}], "children":[{"name":"Function overhead", "type":"resource", "data":[1463, 1467, 0, 0, 6], "details":[{"type":"text", "text":"Kernel dispatch logic."}, {"type":"brief", "text":"Kernel dispatch logic."}]}, {"name":"test_multiplereads.B0", "type":"basicblock", "children":[{"name":"State", "type":"resource", "data":[46, 271, 2, 0, 0], "details":[{"type":"brief", "text":"Live values and control logic"}, {"type":"text", "text":"Resources for live values and control logic. To reduce this area:", "details":[{"type":"text", "text":"reduce size of local variables"}, {"type":"text", "text":"reduce scope of local variables, localizing them as much as possible"}, {"type":"text", "text":"reduce number of nested loops"}]}], "children":[{"name":"No Source Line", "type":"resource", "data":[46, 271, 2, 0, 0]}]}, {"name":"Cluster logic", "type":"resource", "data":[1181, 2330, 57, 0, 4], "details":[{"type":"brief", "text":"Logic required to efficiently support sets of operations that do not stall"}, {"type":"text", "text":"Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."}]}, {"name":"Computation", "type":"resource", "children":[{"name":"test_bw10_delta.cl:40", "type":"resource", "data":[28, 0, 0, 0, 0], "debug":[[{"filename":"test_bw10_delta.cl", "line":40}]], "children":[{"name":"32-bit Integer Add", "type":"resource", "count":1, "data":[28, 0, 0, 0, 0]}], "replace_name":"true"}, {"name":"test_bw10_delta.cl:47", "type":"resource", "data":[13607, 26847, 110, 16, 118], "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "children":[{"name":"Hardened Floating-point Add", "type":"resource", "count":16, "data":[768, 1536, 0, 16, 0]}, {"name":"Load", "type":"resource", "count":2, "data":[6580, 10564, 110, 0, 0], "details":[{"type":"brief", "text":"Burst-coalesced non-aligned LSU"}, {"type":"text", "text":"Load uses a Burst-coalesced non-aligned LSU.  Use Dynamic Profiler to determine performance impact of this LSU."}]}, {"name":"Store", "type":"resource", "count":1, "data":[6259, 14747, 0, 0, 118], "details":[{"type":"brief", "text":"Burst-coalesced non-aligned LSU"}, {"type":"text", "text":"Store uses a Burst-coalesced non-aligned LSU.  Use Dynamic Profiler to determine performance impact of this LSU."}]}], "replace_name":"true"}]}]}]}]}';
var area_srcJSON='{"children":[{"children":[{"data":[13132,20030,112,0,0],"details":[{"text":"Platform interface logic.","type":"text"}],"name":"Board interface","type":"resource"}],"name":"Static Partition","type":"partition"},{"data":[4121,5284,0,0,0],"details":[{"text":"Global interconnect for 2 global loads and 1 global store. Reduce number of global loads and stores to simplify global interconnect.","type":"text"},{"text":"For 2 global loads and 1 global store.","type":"brief"},{"links":[{"guide":"Best Practices Guide : Global Memory Interconnect","link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#hnj1476724450050"}],"text":"See %L for more information","type":"text"}],"name":"Global interconnect","type":"resource"},{"data":[2,71,2,0,0],"details":[{"text":"This read-only memory contains information for the host about the system and about each kernel in the system, including kernel names, arguments, and attributes. The system description ROM ensures that the binary image on the FPGA is compatible with the host program.","type":"text"},{"text":"Contains information for the host.","type":"brief"}],"name":"System description ROM","type":"resource"},{"children":[{"data":[1181,2330,57,0,4],"details":[{"text":"Feedback+Cluster logic","type":"brief"}],"name":"Data control overhead","type":"resource"},{"data":[1463,1467,0,0,6],"details":[{"text":"Kernel dispatch logic.","type":"text"},{"text":"Kernel dispatch logic.","type":"brief"}],"name":"Function overhead","type":"resource"},{"children":[{"count":1,"data":[46,271,2,0,0],"debug":[[{"filename":"","line":0}]],"name":"State","type":"resource"}],"data":[46,271,2,0,0],"name":"No Source Line","type":"resource"},{"children":[{"count":1,"data":[28,0,0,0,0],"debug":[[{"filename":"test_bw10_delta.cl","line":40}]],"name":"32-bit Integer Add","type":"resource"}],"data":[28,0,0,0,0],"debug":[[{"filename":"test_bw10_delta.cl","line":40}]],"name":"test_bw10_delta.cl:40","replace_name":"true","type":"resource"},{"children":[{"count":16,"data":[768,1536,0,16,0],"debug":[[{"filename":"test_bw10_delta.cl","line":47}]],"name":"Hardened Floating-point Add","type":"resource"},{"count":2,"data":[6580,10564,110,0,0],"debug":[[{"filename":"test_bw10_delta.cl","line":47}]],"name":"Load","type":"resource"},{"count":1,"data":[6259,14747,0,0,118],"debug":[[{"filename":"test_bw10_delta.cl","line":47}]],"name":"Store","type":"resource"}],"data":[13607,26847,110,16,118],"debug":[[{"filename":"test_bw10_delta.cl","line":47}]],"name":"test_bw10_delta.cl:47","replace_name":"true","type":"resource"}],"compute_units":1,"data":[16325,30915,169,16,128],"details":[{"text":"Number of compute units: 1","type":"text"},{"text":"Achieved kernel vectorization: 16","type":"text"},{"text":"Kernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality.","type":"text"},{"text":"1 compute unit.\\nAchieved kernel vectorization: 16\\nKernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality.","type":"brief"}],"name":"test_multiplereads","total_kernel_resources":[16325,30915,169,16,128],"total_percent":[2.34122,1.34371,1.09983,2.46823,0.40404],"type":"function"}],"columns":["","ALUTs","FFs","RAMs","DSPs","MLABs","Details"],"data":[20448,36270,171,16,128],"debug_enabled":"true","max_resources":[1405440,2810880,6847,3960,70272],"name":"Kernel System","total":[33580,56300,283,16,128],"total_percent":[4.36837,2.57144,2.00293,4.1332,0.40404],"type":"module"}';
var mavJSON='{"nodes":[{"type":"kernel", "id":2, "name":"test_multiplereads", "children":[{"type":"bb", "id":3, "name":"test_multiplereads.B0", "children":[{"type":"inst", "id":4, "name":"Load", "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "details":[{"type":"table", "Width":"2048 bits", "Type":"Burst-coalesced non-aligned", "Stall-free":"No", "Loads from":"index", "Start Cycle":"35", "Latency":"282", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":5, "name":"Load", "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "details":[{"type":"table", "Width":"2048 bits", "Type":"Burst-coalesced non-aligned", "Stall-free":"No", "Loads from":"index", "Start Cycle":"35", "Latency":"282", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":6, "name":"Store", "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "details":[{"type":"table", "Width":"2048 bits", "Type":"Burst-coalesced non-aligned", "Stall-free":"No", "Stores to":"index", "Start Cycle":"353", "Latency":"2", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":7, "name":"Begin", "details":[{"type":"table", "Start Cycle":"0", "Latency":"1"}]}, {"type":"inst", "id":8, "name":"End", "details":[{"type":"table", "Start Cycle":"355", "Latency":"1"}]}], "details":[{"type":"table", "Latency":"355"}]}]}, {"type":"memtype", "id":1, "name":"Global Memory", "children":[{"type":"memsys", "id":9, "name":"HBM10", "details":[{"type":"table", "Number of banks":"1"}]}, {"type":"memsys", "id":10, "name":"HBM2", "details":[{"type":"table", "Number of banks":"1"}]}, {"type":"memsys", "id":11, "name":"HBM1", "details":[{"type":"table", "Number of banks":"1"}]}]}], "links":[{"from":4, "to":8}, {"from":5, "to":8}, {"from":6, "to":8}, {"from":7, "to":4}, {"from":7, "to":5}, {"from":4, "to":6}, {"from":5, "to":6}, {"from":6, "to":9}, {"from":10, "to":5}, {"from":11, "to":4}]}';
var loopsJSON='{"columns":["", "Pipelined", "II", "Speculated iterations", "Details"], "children":[{"name":"Kernel: test_multiplereads", "data":["", "", ""], "debug":[[{"filename":"test_bw10_delta.cl", "line":9}]], "details":[{"type":"brief", "text":"ND-Range"}, {"type":"text", "text":"ND-Range"}, {"type":"text", "text":"Fmax bottlenck block: None"}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Kernels", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#ipp1476408832230"}]}]}]}';
var fmax_iiJSON='{"basicblocks":{"test_multiplereads.B0":{"name":"test_multiplereads.B0", "target_fmax":"Not specified", "target_ii":"Not specified", "achieved_fmax":"480.0", "achieved_ii":1, "latency":355, "max_interleaving":1, "is_fmax_bottleneck":"No", "is_loop_header":"No", "is_single_block_loop":"No", "loop_layer":0, "loop_location":{}}}, "functions":{"test_multiplereads":{"debug":[{"filename":"test_bw10_delta.cl", "line":9}], "loop_hierachy":{"test_multiplereads__no_loop":["test_multiplereads.B0"]}}}}';
var summaryJSON='{"performanceSummary":{"name":"Kernel Summary", "columns":["Kernel Name", "Kernel Type", "Autorun", "Workgroup Size", "# Compute Units", "Hyper-Optimized Handshaking"], "children":[{"name":"test_multiplereads", "data":["NDRange", "No", [2048, 1, 1], 1, "On"], "details":[{"type":"text", "text":"Kernel type: NDRange"}, {"type":"text", "text":"Required workgroup size: (2048, 1, 1)"}, {"type":"text", "text":"Maximum workgroup size: 2048"}, {"type":"text", "text":"The kernel does not use any work-group information (such as get_local_id() or get_group_id()).Local work-group size will be automatically modified to match global work-group size on launch.This is a hardware optimization."}], "debug":[[{"filename":"test_bw10_delta.cl", "line":9}]]}]}, "estimatedResources":{"name":"Estimated Resource Usage", "columns":["Kernel Name", "ALUTs ", "FFs  ", "RAMs ", "DSPs ", "MLABs"], "children":[{"name":"test_multiplereads", "data":[16325, 30915, 169, 16, 128], "debug":[[{"filename":"test_bw10_delta.cl", "line":9}]]}, {"name":"Global Interconnect", "classes":["summary-highlight", "nohover"], "data":[4121, 5284, 0, 0, 0]}, {"name":"Board Interface", "classes":["summary-highlight", "nohover"], "data":[13132, 20030, 112, 0, 0]}, {"name":"System description ROM", "classes":["summary-highlight", "nohover"], "data":[2, 71, 2, 0, 0]}, {"name":"Total", "classes":["summary-highlight", "nohover"], "data":[33580, 56300, 283, 16, 128], "data_percent":[2.38929, 2.00293, 4.1332, 0.40404]}, {"name":"Available", "classes":["summary-highlight", "nohover"], "data":[1405440, 2810880, 6847, 3960, 0]}]}, "compileWarnings":{"name":"Compile Warnings", "children":[{"name":"Load uses a Burst-coalesced non-aligned LSU", "details":[{"type":"text", "text":"Use Dynamic Profiler to determine performance impact of this LSU."}], "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]]}, {"name":"Load uses a Burst-coalesced non-aligned LSU", "details":[{"type":"text", "text":"Use Dynamic Profiler to determine performance impact of this LSU."}], "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]]}, {"name":"Store uses a Burst-coalesced non-aligned LSU", "details":[{"type":"text", "text":"Use Dynamic Profiler to determine performance impact of this LSU."}], "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]]}]}}';
var infoJSON='{"name":"Info","rows":[{"classes":["info-table"],"data":["testCA_3_MX"],"name":"Project Name"},{"data":["Stratix 10, 1SM21BHU2F53E2VGS1, s10mx_ref:s10mx_hbm_es"],"name":"Target Family, Device, Board"},{"data":["19.4.0 Build 64"],"name":"AOC Version"},{"data":["19.4.0 Build 64 Pro"],"name":"Quartus Version"},{"data":["aoc -profile=all -report -v -D INPUTS=2 -D delta=3 test_bw10_delta.cl -board-package=/mnt/extra/Angelica/exm_binary/stratixMX/BSPMX/s10mx_ref -o testCA_3_MX.aocx"],"name":"Command"},{"data":["Mon Aug 31 20:18:41 2020"],"name":"Reports Generated At"}]}';
var warningsJSON='{"rows":[]}';
var quartusJSON='{"quartusFitClockSummary":{  "name":"Quartus Fit Clock Summary"  ,"columns":["", "Kernel fmax"]  ,"children":[  {    "name":"Frequency (MHz)","data":[404.17]  }]},"quartusFitResourceUsageSummary":{  "name":"Quartus Fit Resource Utilization Summary"  ,"columns":["", "ALMs", "FFs", "RAMs", "DSPs", "MLABs"]  ,"children":[  {"name":"test_multiplereads","data":[18613.6 ,63448 ,226 ,16 ,180]  }]}}';
var fileJSON=[{"path":"/mnt/extra/Angelica/exm_binary/stratixMX/exm_MX/test_delta/test_bw10_delta.cl", "name":"test_bw10_delta.cl", "has_active_debug_locs":false, "absName":"/mnt/extra/Angelica/exm_binary/stratixMX/exm_MX/test_delta/test_bw10_delta.cl", "content":"//Multiple read access\012 // ACL kernel for adding two input vectors\012#define REQD_WG_SIZE (1024 * 32)\012\012//#define V 16\012//#define INPUTS 3\012__attribute((reqd_work_group_size(REQD_WG_SIZE,1,1)))\012__attribute((num_simd_work_items(16)))\012__kernel void test_multiplereads(__global __attribute((buffer_location(\"HBM1\"))) const float *restrict x, \012                         __global __attribute((buffer_location(\"HBM2\"))) const float *restrict y,\012						#if INPUTS >= 3\012                         __global __attribute((buffer_location(\"HBM3\"))) const float *restrict y1,\012						#endif \012						#if INPUTS >= 4\012                         __global __attribute((buffer_location(\"HBM4\"))) const float *restrict y2,\012						#endif \012\012						#if INPUTS >= 5\012                         __global __attribute((buffer_location(\"HBM5\"))) const float *restrict y3,\012						#endif \012						#if INPUTS >= 6\012                         __global __attribute((buffer_location(\"HBM6\"))) const float *restrict y4,\012						#endif \012						#if INPUTS >= 7\012                         __global __attribute((buffer_location(\"HBM7\"))) const float *restrict y5,\012						#endif \012\012						#if INPUTS >= 8\012                         __global __attribute((buffer_location(\"HBM8\"))) const float *restrict y6,\012						#endif \012						#if INPUTS >= 9\012                         __global __attribute((buffer_location(\"HBM9\"))) const float *restrict y7,\012						#endif \012\012\012                         __global __attribute((buffer_location(\"HBM10\"))) float *restrict z,\012					     uint arg)\012{\012    // get index of the work item\012    int index = get_global_id(0) * delta;\012    // add the vector elements\012	#if INPUTS == 0\012	z[index]=index;\012	#elif INPUTS == 1\012    z[index] = x[index]; //+ y[index];\012	#elif INPUTS == 2\012    z[index] = x[index] + y[index];\012	#elif INPUTS == 3\012    z[index] = x[index] + y[index] + y1[index];\012	#elif INPUTS == 4\012    z[index] = x[index] + y[index] + y1[index] + y2[index];\012	#elif INPUTS == 5\012    z[index] = x[index] + y[index] + y1[index] + y2[index] + y3[index];\012	#elif INPUTS == 6 \012    z[index] = x[index] + y[index] + y1[index] + y2[index] + y3[index] + y4[index];\012	#elif INPUTS == 7\012    z[index] = x[index] + y[index] + y1[index] + y2[index] + y3[index] + y4[index] + y5[index];\012	#elif INPUTS == 8\012    z[index] = x[index] + y[index] + y1[index] + y2[index] + y3[index] + y4[index] + y5[index] + y6[index];\012	#elif INPUTS == 9\012    z[index] = x[index] + y[index] + y1[index] + y2[index] + y3[index] + y4[index] + y5[index] + y6[index] + y7[index];\012	#endif\012\012}\012\012"}];
