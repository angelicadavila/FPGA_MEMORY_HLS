var areaJSON='{"columns":["", "ALUTs", "FFs", "RAMs", "DSPs", "MLABs", "Details"], "debug_enabled":"true", "type":"module", "total_percent":[2.6995, 1.5783, 1.24598, 1.98627, 0], "total":[20842, 35023, 136, 0, 67], "name":"Kernel System", "max_resources":[1405440, 2810880, 6847, 3960, 70272], "children":[{"name":"Static Partition", "type":"partition", "children":[{"name":"Board interface", "type":"resource", "data":[13132, 20030, 112, 0, 0], "details":[{"type":"text", "text":"Platform interface logic."}]}]}, {"name":"Global interconnect", "type":"resource", "data":[2338, 4125, 0, 0, 0], "details":[{"type":"text", "text":"Global interconnect for 1 global load and 1 global store."}, {"type":"brief", "text":"For 1 global load and 1 global store."}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Global Memory Interconnect", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#hnj1476724450050"}]}]}, {"name":"System description ROM", "type":"resource", "data":[2, 71, 2, 0, 0], "details":[{"type":"text", "text":"This read-only memory contains information for the host about the system and about each kernel in the system, including kernel names, arguments, and attributes. The system description ROM ensures that the binary image on the FPGA is compatible with the host program."}, {"type":"brief", "text":"Contains information for the host."}]}, {"name":"test_multiplereads", "compute_units":1, "type":"function", "total_percent":[0.824523, 0.477431, 0.384115, 0.321309, 0], "total_kernel_resources":[5370, 10797, 22, 0, 67], "details":[{"type":"text", "text":"Number of compute units: 1"}, {"type":"text", "text":"Achieved kernel vectorization: 4"}, {"type":"text", "text":"Kernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality."}, {"type":"brief", "text":"1 compute unit.\\nAchieved kernel vectorization: 4\\nKernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality."}], "children":[{"name":"Function overhead", "type":"resource", "data":[1463, 1467, 0, 0, 6], "details":[{"type":"text", "text":"Kernel dispatch logic."}, {"type":"brief", "text":"Kernel dispatch logic."}]}, {"name":"test_multiplereads.B0", "type":"basicblock", "children":[{"name":"State", "type":"resource", "data":[44, 204, 2, 0, 0], "details":[{"type":"brief", "text":"Live values and control logic"}, {"type":"text", "text":"Resources for live values and control logic. To reduce this area:", "details":[{"type":"text", "text":"reduce size of local variables"}, {"type":"text", "text":"reduce scope of local variables, localizing them as much as possible"}, {"type":"text", "text":"reduce number of nested loops"}]}], "children":[{"name":"No Source Line", "type":"resource", "data":[44, 204, 2, 0, 0]}]}, {"name":"Cluster logic", "type":"resource", "data":[380, 729, 4, 0, 30], "details":[{"type":"brief", "text":"Logic required to efficiently support sets of operations that do not stall"}, {"type":"text", "text":"Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."}]}, {"name":"Computation", "type":"resource", "children":[{"name":"test_CNA.cl:35", "type":"resource", "data":[15, 0, 0, 0, 0], "debug":[[{"filename":"test_CNA.cl", "line":35}]], "children":[{"name":"32-bit Integer Add", "type":"resource", "count":1, "data":[15, 0, 0, 0, 0]}], "replace_name":"true"}, {"name":"test_CNA.cl:46", "type":"resource", "data":[455.667, 1062, 5.33333, 0, 0], "debug":[[{"filename":"test_CNA.cl", "line":46}]], "children":[{"name":"32-bit Integer Add", "type":"resource", "count":1, "data":[15, 0, 0, 0, 0]}, {"name":"Load", "type":"resource", "count":1, "data":[440.667, 1062, 5.33333, 0, 0], "details":[{"type":"brief", "text":"Burst-coalesced non-aligned LSU"}, {"type":"text", "text":"Load uses a Burst-coalesced non-aligned LSU.  Use Dynamic Profiler to determine performance impact of this LSU."}]}], "replace_name":"true"}, {"name":"test_CNA.cl:47", "type":"resource", "data":[440.667, 1062, 5.33333, 0, 0], "debug":[[{"filename":"test_CNA.cl", "line":47}]], "children":[{"name":"Load", "type":"resource", "count":1, "data":[440.667, 1062, 5.33333, 0, 0], "details":[{"type":"brief", "text":"Burst-coalesced non-aligned LSU"}, {"type":"text", "text":"Load uses a Burst-coalesced non-aligned LSU.  Use Dynamic Profiler to determine performance impact of this LSU."}]}], "replace_name":"true"}, {"name":"test_CNA.cl:48", "type":"resource", "data":[440.667, 1062, 5.33333, 0, 0], "debug":[[{"filename":"test_CNA.cl", "line":48}]], "children":[{"name":"Load", "type":"resource", "count":1, "data":[440.667, 1062, 5.33333, 0, 0], "details":[{"type":"brief", "text":"Burst-coalesced non-aligned LSU"}, {"type":"text", "text":"Load uses a Burst-coalesced non-aligned LSU.  Use Dynamic Profiler to determine performance impact of this LSU."}]}], "replace_name":"true"}, {"name":"test_CNA.cl:51", "type":"resource", "data":[710.333, 1737, 0, 0, 10.3333], "debug":[[{"filename":"test_CNA.cl", "line":51}]], "children":[{"name":"Store", "type":"resource", "count":1, "data":[710.333, 1737, 0, 0, 10.3333], "details":[{"type":"brief", "text":"Burst-coalesced non-aligned LSU"}, {"type":"text", "text":"Store uses a Burst-coalesced non-aligned LSU.  Use Dynamic Profiler to determine performance impact of this LSU."}]}], "replace_name":"true"}, {"name":"test_CNA.cl:52", "type":"resource", "data":[710.333, 1737, 0, 0, 10.3333], "debug":[[{"filename":"test_CNA.cl", "line":52}]], "children":[{"name":"Store", "type":"resource", "count":1, "data":[710.333, 1737, 0, 0, 10.3333], "details":[{"type":"brief", "text":"Burst-coalesced non-aligned LSU"}, {"type":"text", "text":"Store uses a Burst-coalesced non-aligned LSU.  Use Dynamic Profiler to determine performance impact of this LSU."}]}], "replace_name":"true"}, {"name":"test_CNA.cl:53", "type":"resource", "data":[710.333, 1737, 0, 0, 10.3333], "debug":[[{"filename":"test_CNA.cl", "line":53}]], "children":[{"name":"Store", "type":"resource", "count":1, "data":[710.333, 1737, 0, 0, 10.3333], "details":[{"type":"brief", "text":"Burst-coalesced non-aligned LSU"}, {"type":"text", "text":"Store uses a Burst-coalesced non-aligned LSU.  Use Dynamic Profiler to determine performance impact of this LSU."}]}], "replace_name":"true"}]}]}]}]}';
var area_srcJSON='{"children":[{"children":[{"data":[13132,20030,112,0,0],"details":[{"text":"Platform interface logic.","type":"text"}],"name":"Board interface","type":"resource"}],"name":"Static Partition","type":"partition"},{"data":[2338,4125,0,0,0],"details":[{"text":"Global interconnect for 1 global load and 1 global store.","type":"text"},{"text":"For 1 global load and 1 global store.","type":"brief"},{"links":[{"guide":"Best Practices Guide : Global Memory Interconnect","link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#hnj1476724450050"}],"text":"See %L for more information","type":"text"}],"name":"Global interconnect","type":"resource"},{"data":[2,71,2,0,0],"details":[{"text":"This read-only memory contains information for the host about the system and about each kernel in the system, including kernel names, arguments, and attributes. The system description ROM ensures that the binary image on the FPGA is compatible with the host program.","type":"text"},{"text":"Contains information for the host.","type":"brief"}],"name":"System description ROM","type":"resource"},{"children":[{"data":[380,729,4,0,30],"details":[{"text":"Feedback+Cluster logic","type":"brief"}],"name":"Data control overhead","type":"resource"},{"data":[1463,1467,0,0,6],"details":[{"text":"Kernel dispatch logic.","type":"text"},{"text":"Kernel dispatch logic.","type":"brief"}],"name":"Function overhead","type":"resource"},{"children":[{"count":1,"data":[44,204,2,0,0],"debug":[[{"filename":"","line":0}]],"name":"State","type":"resource"}],"data":[44,204,2,0,0],"name":"No Source Line","type":"resource"},{"children":[{"count":1,"data":[15,0,0,0,0],"debug":[[{"filename":"test_CNA.cl","line":35}]],"name":"32-bit Integer Add","type":"resource"}],"data":[15,0,0,0,0],"debug":[[{"filename":"test_CNA.cl","line":35}]],"name":"test_CNA.cl:35","replace_name":"true","type":"resource"},{"children":[{"count":1,"data":[15,0,0,0,0],"debug":[[{"filename":"test_CNA.cl","line":46}]],"name":"32-bit Integer Add","type":"resource"},{"count":1,"data":[440.667,1062,5.33333,0,0],"debug":[[{"filename":"test_CNA.cl","line":46}]],"name":"Load","type":"resource"}],"data":[455.667,1062,5.33333,0,0],"debug":[[{"filename":"test_CNA.cl","line":46}]],"name":"test_CNA.cl:46","replace_name":"true","type":"resource"},{"children":[{"count":1,"data":[440.667,1062,5.33333,0,0],"debug":[[{"filename":"test_CNA.cl","line":47}]],"name":"Load","type":"resource"}],"data":[440.667,1062,5.33333,0,0],"debug":[[{"filename":"test_CNA.cl","line":47}]],"name":"test_CNA.cl:47","replace_name":"true","type":"resource"},{"children":[{"count":1,"data":[440.667,1062,5.33333,0,0],"debug":[[{"filename":"test_CNA.cl","line":48}]],"name":"Load","type":"resource"}],"data":[440.667,1062,5.33333,0,0],"debug":[[{"filename":"test_CNA.cl","line":48}]],"name":"test_CNA.cl:48","replace_name":"true","type":"resource"},{"children":[{"count":1,"data":[710.333,1737,0,0,10.3333],"debug":[[{"filename":"test_CNA.cl","line":51}]],"name":"Store","type":"resource"}],"data":[710.333,1737,0,0,10.3333],"debug":[[{"filename":"test_CNA.cl","line":51}]],"name":"test_CNA.cl:51","replace_name":"true","type":"resource"},{"children":[{"count":1,"data":[710.333,1737,0,0,10.3333],"debug":[[{"filename":"test_CNA.cl","line":52}]],"name":"Store","type":"resource"}],"data":[710.333,1737,0,0,10.3333],"debug":[[{"filename":"test_CNA.cl","line":52}]],"name":"test_CNA.cl:52","replace_name":"true","type":"resource"},{"children":[{"count":1,"data":[710.333,1737,0,0,10.3333],"debug":[[{"filename":"test_CNA.cl","line":53}]],"name":"Store","type":"resource"}],"data":[710.333,1737,0,0,10.3333],"debug":[[{"filename":"test_CNA.cl","line":53}]],"name":"test_CNA.cl:53","replace_name":"true","type":"resource"}],"compute_units":1,"data":[5370,10797,21.99999,0,66.9999],"details":[{"text":"Number of compute units: 1","type":"text"},{"text":"Achieved kernel vectorization: 4","type":"text"},{"text":"Kernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality.","type":"text"},{"text":"1 compute unit.\\nAchieved kernel vectorization: 4\\nKernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality.","type":"brief"}],"name":"test_multiplereads","total_kernel_resources":[5370,10797,22,0,67],"total_percent":[0.824523,0.477431,0.384115,0.321309,0],"type":"function"}],"columns":["","ALUTs","FFs","RAMs","DSPs","MLABs","Details"],"data":[7710,14993,23.99999,0,66.9999],"debug_enabled":"true","max_resources":[1405440,2810880,6847,3960,70272],"name":"Kernel System","total":[20842,35023,136,0,67],"total_percent":[2.6995,1.5783,1.24598,1.98627,0],"type":"module"}';
var mavJSON='{"nodes":[{"type":"kernel", "id":2, "name":"test_multiplereads", "children":[{"type":"bb", "id":3, "name":"test_multiplereads.B0", "children":[{"type":"inst", "id":4, "name":"Load", "debug":[[{"filename":"test_CNA.cl", "line":46}]], "details":[{"type":"table", "Width":"512 bits", "Type":"Burst-coalesced non-aligned", "Stall-free":"No", "Loads from":"i", "Start Cycle":"35", "Latency":"202", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":5, "name":"Store", "debug":[[{"filename":"test_CNA.cl", "line":51}]], "details":[{"type":"table", "Width":"512 bits", "Type":"Burst-coalesced non-aligned", "Stall-free":"No", "Stores to":"i", "Start Cycle":"268", "Latency":"2", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":6, "name":"Begin", "details":[{"type":"table", "Start Cycle":"0", "Latency":"1"}]}, {"type":"inst", "id":7, "name":"End", "details":[{"type":"table", "Start Cycle":"270", "Latency":"1"}]}], "details":[{"type":"table", "Latency":"270"}]}]}, {"type":"memtype", "id":1, "name":"Global Memory", "children":[{"type":"memsys", "id":8, "name":"HBM1", "details":[{"type":"table", "Number of banks":"1"}]}, {"type":"memsys", "id":9, "name":"HBM0", "details":[{"type":"table", "Number of banks":"1"}]}]}], "links":[{"from":4, "to":7}, {"from":5, "to":7}, {"from":6, "to":4}, {"from":4, "to":5}, {"from":8, "to":4}, {"from":5, "to":9}]}';
var loopsJSON='{"columns":["", "Pipelined", "II", "Speculated iterations", "Details"], "children":[{"name":"Kernel: test_multiplereads", "data":["", "", ""], "debug":[[{"filename":"test_CNA.cl", "line":16}]], "details":[{"type":"brief", "text":"ND-Range"}, {"type":"text", "text":"ND-Range"}, {"type":"text", "text":"Fmax bottlenck block: None"}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Kernels", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#ipp1476408832230"}]}]}]}';
var fmax_iiJSON='{"basicblocks":{"test_multiplereads.B0":{"name":"test_multiplereads.B0", "target_fmax":"Not specified", "target_ii":"Not specified", "achieved_fmax":"480.0", "achieved_ii":1, "latency":270, "max_interleaving":1, "is_fmax_bottleneck":"No", "is_loop_header":"No", "is_single_block_loop":"No", "loop_layer":0, "loop_location":{}}}, "functions":{"test_multiplereads":{"debug":[{"filename":"test_CNA.cl", "line":16}], "loop_hierachy":{"test_multiplereads__no_loop":["test_multiplereads.B0"]}}}}';
var summaryJSON='{"performanceSummary":{"name":"Kernel Summary", "columns":["Kernel Name", "Kernel Type", "Autorun", "Workgroup Size", "# Compute Units", "Hyper-Optimized Handshaking"], "children":[{"name":"test_multiplereads", "data":["NDRange", "No", [8192, 1, 1], 1, "On"], "details":[{"type":"text", "text":"Kernel type: NDRange"}, {"type":"text", "text":"Required workgroup size: (8192, 1, 1)"}, {"type":"text", "text":"Maximum workgroup size: 8192"}, {"type":"text", "text":"The kernel does not use any work-group information (such as get_local_id() or get_group_id()).Local work-group size will be automatically modified to match global work-group size on launch.This is a hardware optimization."}], "debug":[[{"filename":"test_CNA.cl", "line":16}]]}]}, "estimatedResources":{"name":"Estimated Resource Usage", "columns":["Kernel Name", "ALUTs ", "FFs  ", "RAMs ", "DSPs ", "MLABs"], "children":[{"name":"test_multiplereads", "data":[5370, 10797, 22, 0, 67], "debug":[[{"filename":"test_CNA.cl", "line":16}]]}, {"name":"Global Interconnect", "classes":["summary-highlight", "nohover"], "data":[2338, 4125, 0, 0, 0]}, {"name":"Board Interface", "classes":["summary-highlight", "nohover"], "data":[13132, 20030, 112, 0, 0]}, {"name":"System description ROM", "classes":["summary-highlight", "nohover"], "data":[2, 71, 2, 0, 0]}, {"name":"Total", "classes":["summary-highlight", "nohover"], "data":[20842, 35023, 136, 0, 67], "data_percent":[1.48295, 1.24598, 1.98627, 0]}, {"name":"Available", "classes":["summary-highlight", "nohover"], "data":[1405440, 2810880, 6847, 3960, 0]}]}, "compileWarnings":{"name":"Compile Warnings", "children":[{"name":"Load uses a Burst-coalesced non-aligned LSU", "details":[{"type":"text", "text":"Use Dynamic Profiler to determine performance impact of this LSU."}], "debug":[[{"filename":"test_CNA.cl", "line":46}], [{"filename":"test_CNA.cl", "line":47}], [{"filename":"test_CNA.cl", "line":48}]]}, {"name":"Store uses a Burst-coalesced non-aligned LSU", "details":[{"type":"text", "text":"Use Dynamic Profiler to determine performance impact of this LSU."}], "debug":[[{"filename":"test_CNA.cl", "line":51}], [{"filename":"test_CNA.cl", "line":52}], [{"filename":"test_CNA.cl", "line":53}]]}]}}';
var infoJSON='{"name":"Info","rows":[{"classes":["info-table"],"data":["testMX_CNA_4_1"],"name":"Project Name"},{"data":["Stratix 10, 1SM21BHU2F53E2VGS1, s10mx_ref:s10mx_hbm_es"],"name":"Target Family, Device, Board"},{"data":["19.4.0 Build 64"],"name":"AOC Version"},{"data":["19.4.0 Build 64 Pro"],"name":"Quartus Version"},{"data":["aoc -profile=all test_CNA.cl -D INPUTS=1 -D V=4 -board-package=/mnt/extra/Angelica/exm_binary/stratixMX/BSPMX/s10mx_ref -o testMX_CNA_4_1.aocx"],"name":"Command"},{"data":["Tue May 26 03:49:56 2020"],"name":"Reports Generated At"}]}';
var warningsJSON='{"rows":[]}';
var quartusJSON='{"quartusFitClockSummary":{  "name":"Quartus Fit Clock Summary"  ,"columns":["", "Kernel fmax"]  ,"children":[  {    "name":"Frequency (MHz)","data":[455.56]  }]},"quartusFitResourceUsageSummary":{  "name":"Quartus Fit Resource Utilization Summary"  ,"columns":["", "ALMs", "FFs", "RAMs", "DSPs", "MLABs"]  ,"children":[  {"name":"test_multiplereads","data":[7282.3 ,20468 ,37 ,0 ,88]  }]}}';
var fileJSON=[{"path":"/mnt/extra/Angelica/exm_binary/stratixMX/exm_MX/test_CNA.cl", "name":"test_CNA.cl", "has_active_debug_locs":false, "absName":"/mnt/extra/Angelica/exm_binary/stratixMX/exm_MX/test_CNA.cl", "content":"//Multiple read access\012// uBenchmark to model DRAM memory access for Intel FPGAs\012// CNA -Coalesced Non-Aligned\012// based on Intel OpenCL access\012// Universidad de Zaragoza\012// 2020\012// angelicadg@unizar.es\012\012 // ACL kernel for adding two input vectors\012#define REQD_WG_SIZE (1024 * 32)\012\012//#define V 16\012//#define INPUTS 3\012__attribute((reqd_work_group_size(REQD_WG_SIZE,1,1)))\012__attribute((num_simd_work_items(V)))\012__kernel void test_multiplereads(\012						 __global const __attribute((buffer_location(\"HBM1\"))) float *restrict x, \012                         __global const __attribute((buffer_location(\"HBM2\"))) float *restrict y,\012						#if INPUTS >= 3\012                         __global const __attribute((buffer_location(\"HBM3\"))) float *restrict y1,\012						#endif \012\012						#if INPUTS >= 4\012                         __global const __attribute((buffer_location(\"HBM4\"))) float *restrict y2,\012						#endif \012\012						#if INPUTS >= 5\012                         __global const __attribute((buffer_location(\"HBM5\"))) float *restrict y3,\012						#endif \012\012                         __global __attribute((buffer_location(\"HBM0\"))) float *restrict z,\012					     uint arg)\012{\012    // get index of the work item\012    int i = get_global_id(0);\012\012	#if INPUTS == 0\012  	\012  	// three stores statically coalesced floato one\012  	z[3*i+0] =i ;\012  	z[3*i+1] =i ;\012	z[3*i+2] =i ;\012	#endif\012    // add the vector elements\012	#if INPUTS == 1\012  	float a1 = x[3*i+0];\012  	float a2 = x[3*i+1];\012  	float a3 = x[3*i+2];\012  	\012  	// three stores statically coalesced floato one\012  	z[3*i+0] = a3;\012  	z[3*i+1] = a2;\012	z[3*i+2] = a1;\012	#endif\012\012	#if INPUTS == 2\012  	float a1 = x[3*i+0];\012  	float a2 = x[3*i+1];\012  	float a3 = x[3*i+2];\012  	\012  	float b1 = y[3*i+0];\012  	float b2 = y[3*i+1];\012  	float b3 = y[3*i+2];\012  	// three stores statically coalesced floato one\012  	z[3*i+0] = a3 + b3 ;\012  	z[3*i+1] = a2 + b2;\012	z[3*i+2] = a1 + b1;\012	#endif\012\012	#if INPUTS == 3\012  	float a1 = x[3*i+0];\012  	float a2 = x[3*i+1];\012  	float a3 = x[3*i+2];\012  	\012  	float b1 = y[3*i+0];\012  	float b2 = y[3*i+1];\012  	float b3 = y[3*i+2];\012\012  	float c1 = y1[3*i+0];\012  	float c2 = y1[3*i+1];\012  	float c3 = y1[3*i+2];\012  	// three stores statically coalesced floato one\012  	z[3*i+0] = a3 + b3 + c3;\012  	z[3*i+1] = a2 + b2 + c2;\012	z[3*i+2] = a1 + b1 + c1;\012	#endif\012\012	#if INPUTS == 4\012  	float a1 = x[3*i+0];\012  	float a2 = x[3*i+1];\012  	float a3 = x[3*i+2];\012  	\012  	float b1 = y[3*i+0];\012  	float b2 = y[3*i+1];\012  	float b3 = y[3*i+2];\012\012  	float c1 = y1[3*i+0];\012  	float c2 = y1[3*i+1];\012  	float c3 = y1[3*i+2];\012\012  	float d1 = y2[3*i+0];\012  	float d2 = y2[3*i+1];\012  	float d3 = y2[3*i+2];\012  	// three stores statically coalesced floato one\012  	z[3*i+0] = a3 + b3 + c3 + d3;\012  	z[3*i+1] = a2 + b2 + c2 + d2;\012	z[3*i+2] = a1 + b1 + c1 + d1;\012	#endif\012\012	#if INPUTS == 5\012  	float a1 = x[3*i+0];\012  	float a2 = x[3*i+1];\012  	float a3 = x[3*i+2];\012  	\012  	float b1 = y[3*i+0];\012  	float b2 = y[3*i+1];\012  	float b3 = y[3*i+2];\012\012  	float c1 = y1[3*i+0];\012  	float c2 = y1[3*i+1];\012  	float c3 = y1[3*i+2];\012\012  	float d1 = y2[3*i+0];\012  	float d2 = y2[3*i+1];\012  	float d3 = y2[3*i+2];\012\012  	float e1 = y3[3*i+0];\012  	float e2 = y3[3*i+1];\012  	float e3 = y3[3*i+2];\012\012  	// three stores statically coalesced floato one\012  	z[3*i+0] = a3 + b3 + c3 + d3 + e3;\012  	z[3*i+1] = a2 + b2 + c2 + d2 + e2;\012	z[3*i+2] = a1 + b1 + c1 + d1 + e1;\012	#endif\012\012}\012\012"}];
