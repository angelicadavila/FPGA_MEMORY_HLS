var areaJSON='{"columns":["", "ALUTs", "FFs", "RAMs", "DSPs", "MLABs", "Details"], "debug_enabled":"true", "type":"module", "total_percent":[4.11291, 2.25581, 2.01229, 4.03096, 0], "total":[31184, 56563, 276, 0, 26], "name":"Kernel System", "max_resources":[1405440, 2810880, 6847, 3960, 70272], "children":[{"name":"Static Partition", "type":"partition", "children":[{"name":"Board interface", "type":"resource", "data":[13132, 20030, 112, 0, 0], "details":[{"type":"text", "text":"Platform interface logic."}]}]}, {"name":"Global interconnect", "type":"resource", "data":[7952, 8491, 0, 0, 0], "details":[{"type":"text", "text":"Global interconnect for 0 global loads and 8 global stores. Reduce number of global loads and stores to simplify global interconnect."}, {"type":"brief", "text":"For 0 global loads and 8 global stores."}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Global Memory Interconnect", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#hnj1476724450050"}]}]}, {"name":"System description ROM", "type":"resource", "data":[2, 71, 2, 0, 0], "details":[{"type":"text", "text":"This read-only memory contains information for the host about the system and about each kernel in the system, including kernel names, arguments, and attributes. The system description ROM ensures that the binary image on the FPGA is compatible with the host program."}, {"type":"brief", "text":"Contains information for the host."}]}, {"name":"test_random_access", "compute_units":1, "type":"function", "total_percent":[1.73073, 0.755493, 0.995098, 2.366, 0], "total_kernel_resources":[10098, 27971, 162, 0, 26], "details":[{"type":"text", "text":"Number of compute units: 1"}, {"type":"text", "text":"Achieved kernel vectorization: 8"}, {"type":"text", "text":"Kernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality."}, {"type":"brief", "text":"1 compute unit.\\nAchieved kernel vectorization: 8\\nKernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality."}], "children":[{"name":"Function overhead", "type":"resource", "data":[1463, 1467, 0, 0, 6], "details":[{"type":"text", "text":"Kernel dispatch logic."}, {"type":"brief", "text":"Kernel dispatch logic."}]}, {"name":"test_random_access.B0", "type":"basicblock", "children":[{"name":"State", "type":"resource", "data":[2005, 4905, 9, 0, 20], "details":[{"type":"brief", "text":"Live values and control logic"}, {"type":"text", "text":"Resources for live values and control logic. To reduce this area:", "details":[{"type":"text", "text":"reduce size of local variables"}, {"type":"text", "text":"reduce scope of local variables, localizing them as much as possible"}, {"type":"text", "text":"reduce number of nested loops"}]}], "children":[{"name":"No Source Line", "type":"resource", "data":[2005, 4905, 9, 0, 20]}]}, {"name":"Cluster logic", "type":"resource", "data":[527, 935, 58, 0, 0], "details":[{"type":"brief", "text":"Logic required to efficiently support sets of operations that do not stall"}, {"type":"text", "text":"Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."}]}, {"name":"Computation", "type":"resource", "children":[{"name":"test_WACK.cl:42", "type":"resource", "data":[0, 0, 8, 0, 0], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "children":[{"name":"On-chip Read-Only Memory Lookup", "type":"resource", "count":8, "data":[0, 0, 8, 0, 0], "details":[{"type":"brief", "text":"Read from 8192 bit ROM. "}, {"type":"text", "text":"Read from 8192 bit ROM. A copy of the ROM is created for each access."}]}], "replace_name":"true"}, {"name":"test_WACK.cl:45", "type":"resource", "data":[6103, 20664, 87, 0, 0], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "children":[{"name":"32-bit Integer to Floating-point Conversion", "type":"resource", "count":8, "data":[3056, 3080, 0, 0, 0]}, {"name":"Store", "type":"resource", "count":8, "data":[3047, 17584, 87, 0, 0], "details":[{"type":"text", "text":"Store uses a Burst-coalesced LSU"}, {"type":"brief", "text":"Burst-coalesced LSU"}]}], "replace_name":"true"}]}]}]}]}';
var area_srcJSON='{"children":[{"children":[{"data":[13132,20030,112,0,0],"details":[{"text":"Platform interface logic.","type":"text"}],"name":"Board interface","type":"resource"}],"name":"Static Partition","type":"partition"},{"data":[7952,8491,0,0,0],"details":[{"text":"Global interconnect for 0 global loads and 8 global stores. Reduce number of global loads and stores to simplify global interconnect.","type":"text"},{"text":"For 0 global loads and 8 global stores.","type":"brief"},{"links":[{"guide":"Best Practices Guide : Global Memory Interconnect","link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#hnj1476724450050"}],"text":"See %L for more information","type":"text"}],"name":"Global interconnect","type":"resource"},{"data":[2,71,2,0,0],"details":[{"text":"This read-only memory contains information for the host about the system and about each kernel in the system, including kernel names, arguments, and attributes. The system description ROM ensures that the binary image on the FPGA is compatible with the host program.","type":"text"},{"text":"Contains information for the host.","type":"brief"}],"name":"System description ROM","type":"resource"},{"children":[{"data":[527,935,58,0,0],"details":[{"text":"Feedback+Cluster logic","type":"brief"}],"name":"Data control overhead","type":"resource"},{"data":[1463,1467,0,0,6],"details":[{"text":"Kernel dispatch logic.","type":"text"},{"text":"Kernel dispatch logic.","type":"brief"}],"name":"Function overhead","type":"resource"},{"children":[{"count":1,"data":[2005,4905,9,0,20],"debug":[[{"filename":"","line":0}]],"name":"State","type":"resource"}],"data":[2005,4905,9,0,20],"name":"No Source Line","type":"resource"},{"children":[{"count":8,"data":[0,0,8,0,0],"debug":[[{"filename":"test_WACK.cl","line":42}]],"name":"On-chip Read-Only Memory Lookup","type":"resource"}],"data":[0,0,8,0,0],"debug":[[{"filename":"test_WACK.cl","line":42}]],"name":"test_WACK.cl:42","replace_name":"true","type":"resource"},{"children":[{"count":8,"data":[3056,3080,0,0,0],"debug":[[{"filename":"test_WACK.cl","line":45}]],"name":"32-bit Integer to Floating-point Conversion","type":"resource"},{"count":8,"data":[3047,17584,87,0,0],"debug":[[{"filename":"test_WACK.cl","line":45}]],"name":"Store","type":"resource"}],"data":[6103,20664,87,0,0],"debug":[[{"filename":"test_WACK.cl","line":45}]],"name":"test_WACK.cl:45","replace_name":"true","type":"resource"}],"compute_units":1,"data":[10098,27971,162,0,26],"details":[{"text":"Number of compute units: 1","type":"text"},{"text":"Achieved kernel vectorization: 8","type":"text"},{"text":"Kernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality.","type":"text"},{"text":"1 compute unit.\\nAchieved kernel vectorization: 8\\nKernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality.","type":"brief"}],"name":"test_random_access","total_kernel_resources":[10098,27971,162,0,26],"total_percent":[1.73073,0.755493,0.995098,2.366,0],"type":"function"}],"columns":["","ALUTs","FFs","RAMs","DSPs","MLABs","Details"],"data":[18052,36533,164,0,26],"debug_enabled":"true","max_resources":[1405440,2810880,6847,3960,70272],"name":"Kernel System","total":[31184,56563,276,0,26],"total_percent":[4.11291,2.25581,2.01229,4.03096,0],"type":"module"}';
var mavJSON='{"nodes":[{"type":"kernel", "id":2, "name":"test_random_access", "children":[{"type":"bb", "id":3, "name":"test_random_access.B0", "children":[{"type":"inst", "id":4, "name":"Store", "debug":[[{"filename":"test_WACK.cl", "line":45}]], "details":[{"type":"table", "Width":"32 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Start Cycle":"45", "Latency":"256", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":5, "name":"Store", "debug":[[{"filename":"test_WACK.cl", "line":45}]], "details":[{"type":"table", "Width":"32 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Start Cycle":"301", "Latency":"256", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":6, "name":"Store", "debug":[[{"filename":"test_WACK.cl", "line":45}]], "details":[{"type":"table", "Width":"32 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Start Cycle":"557", "Latency":"256", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":7, "name":"Store", "debug":[[{"filename":"test_WACK.cl", "line":45}]], "details":[{"type":"table", "Width":"32 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Start Cycle":"813", "Latency":"256", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":8, "name":"Store", "debug":[[{"filename":"test_WACK.cl", "line":45}]], "details":[{"type":"table", "Width":"32 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Start Cycle":"1069", "Latency":"256", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":9, "name":"Store", "debug":[[{"filename":"test_WACK.cl", "line":45}]], "details":[{"type":"table", "Width":"32 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Start Cycle":"1325", "Latency":"256", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":10, "name":"Store", "debug":[[{"filename":"test_WACK.cl", "line":45}]], "details":[{"type":"table", "Width":"32 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Start Cycle":"1581", "Latency":"256", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":11, "name":"Store", "debug":[[{"filename":"test_WACK.cl", "line":45}]], "details":[{"type":"table", "Width":"32 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Stores to":"index", "Start Cycle":"1837", "Latency":"64", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":12, "name":"Begin", "details":[{"type":"table", "Start Cycle":"0", "Latency":"1"}]}, {"type":"inst", "id":13, "name":"End", "details":[{"type":"table", "Start Cycle":"1901", "Latency":"1"}]}], "details":[{"type":"table", "Latency":"1901"}]}]}, {"type":"memtype", "id":1, "name":"Global Memory", "children":[{"type":"memsys", "id":14, "name":"HBM0", "details":[{"type":"table", "Number of banks":"1"}]}]}], "links":[{"from":4, "to":13}, {"from":5, "to":13}, {"from":6, "to":13}, {"from":7, "to":13}, {"from":8, "to":13}, {"from":9, "to":13}, {"from":10, "to":13}, {"from":11, "to":13}, {"from":12, "to":4}, {"from":4, "to":5}, {"from":5, "to":6}, {"from":6, "to":7}, {"from":7, "to":8}, {"from":8, "to":9}, {"from":9, "to":10}, {"from":10, "to":11}, {"from":10, "to":14}, {"from":4, "to":14}, {"from":7, "to":14}, {"from":8, "to":14}, {"from":5, "to":14}, {"from":11, "to":14}, {"from":9, "to":14}, {"from":6, "to":14}]}';
var loopsJSON='{"columns":["", "Pipelined", "II", "Speculated iterations", "Details"], "children":[{"name":"Kernel: test_random_access", "data":["", "", ""], "debug":[[{"filename":"test_WACK.cl", "line":7}]], "details":[{"type":"brief", "text":"ND-Range"}, {"type":"text", "text":"ND-Range"}, {"type":"text", "text":"Fmax bottlenck block: None"}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Kernels", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#ipp1476408832230"}]}]}]}';
var fmax_iiJSON='{"basicblocks":{"test_random_access.B0":{"name":"test_random_access.B0", "target_fmax":"Not specified", "target_ii":"Not specified", "achieved_fmax":"480.0", "achieved_ii":1, "latency":1901, "max_interleaving":1, "is_fmax_bottleneck":"No", "is_loop_header":"No", "is_single_block_loop":"No", "loop_layer":0, "loop_location":{}}}, "functions":{"test_random_access":{"debug":[{"filename":"test_WACK.cl", "line":7}], "loop_hierachy":{"test_random_access__no_loop":["test_random_access.B0"]}}}}';
var summaryJSON='{"performanceSummary":{"name":"Kernel Summary", "columns":["Kernel Name", "Kernel Type", "Autorun", "Workgroup Size", "# Compute Units", "Hyper-Optimized Handshaking"], "children":[{"name":"test_random_access", "data":["NDRange", "No", [4096, 1, 1], 1, "On"], "details":[{"type":"text", "text":"Kernel type: NDRange"}, {"type":"text", "text":"Required workgroup size: (4096, 1, 1)"}, {"type":"text", "text":"Maximum workgroup size: 4096"}, {"type":"text", "text":"The kernel does not use any work-group information (such as get_local_id() or get_group_id()).Local work-group size will be automatically modified to match global work-group size on launch.This is a hardware optimization."}], "debug":[[{"filename":"test_WACK.cl", "line":7}]]}]}, "estimatedResources":{"name":"Estimated Resource Usage", "columns":["Kernel Name", "ALUTs ", "FFs  ", "RAMs ", "DSPs ", "MLABs"], "children":[{"name":"test_random_access", "data":[10098, 27971, 162, 0, 26], "debug":[[{"filename":"test_WACK.cl", "line":7}]]}, {"name":"Global Interconnect", "classes":["summary-highlight", "nohover"], "data":[7952, 8491, 0, 0, 0]}, {"name":"Board Interface", "classes":["summary-highlight", "nohover"], "data":[13132, 20030, 112, 0, 0]}, {"name":"System description ROM", "classes":["summary-highlight", "nohover"], "data":[2, 71, 2, 0, 0]}, {"name":"Total", "classes":["summary-highlight", "nohover"], "data":[31184, 56563, 276, 0, 26], "data_percent":[2.21881, 2.01229, 4.03096, 0]}, {"name":"Available", "classes":["summary-highlight", "nohover"], "data":[1405440, 2810880, 6847, 3960, 0]}]}, "compileWarnings":{"name":"Compile Warnings", "children":[]}}';
var infoJSON='{"name":"Info","rows":[{"classes":["info-table"],"data":["testMX_WACK_8_0"],"name":"Project Name"},{"data":["Stratix 10, 1SM21BHU2F53E2VGS1, s10mx_ref:s10mx_hbm_es"],"name":"Target Family, Device, Board"},{"data":["19.4.0 Build 64"],"name":"AOC Version"},{"data":["19.4.0 Build 64 Pro"],"name":"Quartus Version"},{"data":["aoc -profile=all test_WACK.cl -D INPUTS=0 -D V=8 -board-package=/mnt/extra/Angelica/exm_binary/stratixMX/BSPMX/s10mx_ref -o testMX_WACK_8_0.aocx"],"name":"Command"},{"data":["Sun May 31 16:41:04 2020"],"name":"Reports Generated At"}]}';
var warningsJSON='{"rows":[{"details":["Compiler Warning: Vectorized kernel contains loads/stores that cannot be vectorized. This might reduce performance."],"name":"Vectorized kernel contains loads/stores that cannot be vectorized. This might reduce performance."}]}';
var quartusJSON='{"quartusFitClockSummary":{  "name":"Quartus Fit Clock Summary"  ,"columns":["", "Kernel fmax"]  ,"children":[  {    "name":"Frequency (MHz)","data":[455.56]  }]},"quartusFitResourceUsageSummary":{  "name":"Quartus Fit Resource Utilization Summary"  ,"columns":["", "ALMs", "FFs", "RAMs", "DSPs", "MLABs"]  ,"children":[  {"name":"test_random_access","data":[14486.6 ,46172 ,138 ,0 ,18]  }]}}';
var fileJSON=[{"path":"/mnt/extra/Angelica/exm_binary/stratixMX/exm_MX/test_WACK.cl", "name":"test_WACK.cl", "has_active_debug_locs":false, "absName":"/mnt/extra/Angelica/exm_binary/stratixMX/exm_MX/test_WACK.cl", "content":"//Random index to verify the memory random accesss\012 // ACL kernel for adding two input vectors\012#define REQD_WG_SIZE (1024 * 32)\012//#define V 16 \012__attribute((reqd_work_group_size(REQD_WG_SIZE,1,1)))\012__attribute((num_simd_work_items(V)))\012__kernel void test_random_access(\012						 __global const __attribute((buffer_location(\"HBM1\"))) float *restrict x, \012                          __global const __attribute((buffer_location(\"HBM2\"))) float  *restrict y, \012						#if INPUTS >= 3\012                          __global const __attribute((buffer_location(\"HBM3\"))) float *restrict y1,\012						#endif \012						#if INPUTS >= 4\012                          __global const __attribute((buffer_location(\"HBM4\"))) float *restrict y2,\012						#endif \012\012						#if INPUTS >= 5\012                          __global const __attribute((buffer_location(\"HBM5\"))) float *restrict y3,\012						#endif \012						#if INPUTS >= 6\012                          __global const __attribute((buffer_location(\"HBM6\"))) float *restrict y4,\012						#endif \012						#if INPUTS >= 7\012                          __global const __attribute((buffer_location(\"HBM7\"))) float *restrict y5,\012						#endif \012\012						#if INPUTS >= 8\012                          __global const __attribute((buffer_location(\"HBM8\"))) float *restrict y6,\012						#endif \012						#if INPUTS >= 9\012                          __global const __attribute((buffer_location(\"HBM9\"))) float *restrict y7,\012						#endif \012\012                         __global __attribute((buffer_location(\"HBM0\"))) float *restrict z,\012					     uint arg)\012{\012 	const int rand[2048] = {\012		1764, 715, 561, 1484, 307, 1651, 1673, 1717, 1501, 687, 1073, 629, 798, 1363, 1236, 858, 770, 1308, 1389, 1766, 1371, 1859, 594, 1431, 1518, 1705, 682, 1264, 952, 276, 1128, 1858, 295, 982, 538, 1244, 1726, 437, 1236, 776, 109, 726, 1671, 519, 1238, 722, 281, 1379, 1663, 504, 1149, 1931, 1086, 629, 954, 1107, 928, 1323, 902, 1505, 2021, 170, 674, 761, 1800, 170, 1662, 1438, 1049, 582, 1848, 1496, 1314, 1910, 2036, 283, 1566, 81, 828, 1392, 1134, 1114, 1822, 648, 804, 267, 35, 1438, 152, 2033, 1914, 1981, 1386, 1910, 1855, 1726, 159, 1842, 306, 911, 165, 1627, 929, 231, 1614, 41, 56, 872, 957, 2042, 1580, 1731, 1770, 520, 48, 620, 1572, 1377, 128, 389, 64, 1604, 490, 1102, 0, 1716, 1868, 519, 425, 833, 1560, 1759, 1247, 736, 156, 615, 1234, 1841, 1850, 645, 1307, 825, 808, 345, 389, 137, 1325, 829, 573, 83, 1994, 499, 1946, 1138, 1363, 1357, 1237, 1223, 1841, 946, 1457, 431, 1103, 1633, 235, 2000, 497, 1009, 1365, 208, 1033, 823, 23, 816, 844, 1450, 338, 1919, 53, 1543, 772, 1583, 1017, 53, 889, 825, 91, 1302, 834, 1998, 720, 2038, 537, 2046, 852, 1381, 1260, 1610, 579, 1343, 1450, 1659, 902, 1540, 329, 542, 442, 962, 393, 632, 1419, 597, 162, 519, 1915, 1548, 1289, 111, 1986, 458, 911, 1273, 1443, 1581, 263, 83, 2029, 1787, 1227, 1866, 148, 1117, 1651, 892, 441, 1775, 961, 583, 209, 643, 1416, 1535, 1540, 915, 1682, 1839, 1881, 1881, 1820, 989, 315, 443, 482, 1134, 442, 488, 463, 2001, 1697, 1007, 816, 553, 1473, 1949, 225, 911, 1985, 916, 1046, 906, 1462, 290, 157, 152, 1540, 109, 1896, 917, 1075, 806, 154, 193, 498, 1044, 557, 738, 630, 1049, 1408, 1506, 1471, 2041, 1870, 916, 2024, 1474, 1076, 205, 1452, 350, 755, 1841, 1301, 129, 1012, 996, 1850, 900, 991, 240, 1328, 1537, 389, 741, 947, 1823, 1881, 1521, 749, 801, 289, 507, 1632, 103, 1821, 436, 1500, 455, 1936, 1214, 693, 542, 83, 1855, 1610, 973, 361, 1086, 1557, 1531, 1366, 1006, 1521, 2033, 1791, 618, 1797, 301, 497, 642, 1276, 1573, 1779, 1981, 1369, 762, 251, 39, 779, 83, 115, 1671, 1557, 2040, 1963, 907, 1635, 541, 473, 334, 676, 1937, 940, 671, 286, 899, 1274, 35, 1318, 1316, 1348, 670, 205, 295, 1173, 1648, 1630, 1585, 1727, 426, 1325, 1021, 488, 621, 2010, 167, 536, 1805, 2025, 146, 2037, 1268, 1205, 708, 1140, 2044, 29, 1174, 1600, 6, 1997, 694, 1218, 1838, 1187, 1400, 1526, 763, 1628, 338, 356, 1983, 681, 1953, 2035, 1637, 801, 1679, 187, 631, 921, 101, 1343, 1368, 491, 1790, 1167, 1085, 605, 1893, 1212, 584, 625, 535, 1779, 1752, 463, 480, 413, 43, 1006, 42, 1159, 1369, 275, 1581, 109, 1420, 1846, 194, 88, 1378, 1697, 891, 1817, 1236, 1736, 1435, 1885, 493, 1952, 372, 576, 1001, 998, 1746, 704, 1207, 720, 868, 1493, 1290, 505, 1678, 1033, 1039, 1807, 1088, 1515, 50, 1779, 55, 1828, 370, 591, 1626, 1471, 880, 1206, 763, 108, 178, 1903, 1938, 2040, 1467, 1982, 1416, 1201, 1730, 1214, 1164, 277, 822, 307, 1057, 1551, 416, 267, 808, 615, 494, 276, 534, 342, 1059, 202, 958, 1667, 1547, 1937, 759, 49, 227, 1694, 605, 1500, 340, 1698, 480, 267, 977, 1968, 1983, 422, 1245, 1868, 444, 1146, 939, 1302, 326, 1936, 1205, 845, 753, 998, 1482, 282, 472, 905, 1122, 1602, 796, 1806, 381, 1662, 791, 1757, 1859, 660, 1894, 1435, 1960, 469, 431, 290, 328, 32, 1686, 2024, 313, 1405, 237, 1286, 475, 1475, 1162, 2005, 653, 1496, 127, 1081, 1965, 1825, 1382, 1688, 1129, 697, 842, 796, 181, 1464, 31, 1027, 901, 1903, 630, 1050, 1785, 518, 1784, 294, 1666, 223, 1391, 994, 1446, 305, 435, 1926, 506, 482, 927, 538, 1910, 832, 663, 1414, 1487, 947, 1913, 1263, 901, 1084, 1253, 1678, 1313, 1561, 1911, 820, 1906, 191, 570, 1371, 1336, 665, 1948, 37, 811, 1134, 697, 851, 1644, 1740, 1173, 1015, 1527, 1778, 1455, 820, 12, 1548, 1404, 860, 340, 174, 943, 442, 1062, 1329, 679, 1659, 1854, 1382, 407, 1053, 185, 1385, 1116, 48, 1747, 241, 997, 1291, 1843, 1147, 329, 310, 183, 76, 361, 1694, 1156, 1003, 223, 789, 1258, 1699, 346, 887, 301, 355, 798, 880, 989, 1615, 175, 100, 189, 1580, 1372, 957, 293, 691, 1932, 591, 73, 680, 352, 839, 1756, 543, 921, 1745, 1900, 617, 733, 1530, 175, 195, 1766, 1536, 35, 1445, 1811, 132, 2032, 173, 1131, 1395, 1509, 1603, 1501, 1182, 274, 803, 258, 1648, 54, 1904, 1620, 1402, 1544, 732, 1963, 1108, 1341, 168, 354, 1337, 1755, 165, 656, 791, 408, 1826, 1743, 696, 1197, 1555, 1904, 1920, 838, 1539, 1205, 440, 85, 1165, 974, 1744, 766, 1094, 1041, 317, 1466, 257, 947, 1554, 1749, 50, 15, 1756, 1895, 1977, 101, 1980, 2008, 606, 1323, 556, 2025, 45, 783, 13, 542, 853, 1257, 777, 1819, 173, 1734, 246, 1551, 858, 299, 416, 1093, 1325, 1305, 525, 672, 217, 2024, 23, 1989, 1489, 1303, 1771, 342, 1792, 1432, 1632, 1923, 1030, 1788, 821, 1577, 946, 1891, 2046, 1979, 1495, 136, 2034, 53, 357, 650, 495, 298, 1131, 143, 302, 436, 536, 1295, 1029, 1863, 1877, 1777, 518, 133, 1083, 318, 1905, 1855, 1135, 366, 171, 1358, 1592, 1243, 1585, 343, 250, 795, 55, 1999, 1071, 299, 1893, 1120, 363, 1395, 324, 691, 48, 2003, 39, 577, 604, 1498, 520, 170, 1285, 1837, 725, 1710, 1843, 1579, 1814, 1217, 1628, 1603, 1104, 1658, 1805, 2017, 177, 1919, 141, 212, 440, 71, 939, 920, 565, 672, 1463, 903, 1257, 1175, 340, 1056, 52, 761, 1217, 925, 47, 326, 1169, 320, 1187, 1098, 744, 733, 1606, 496, 557, 1565, 318, 1148, 1417, 1345, 889, 1835, 1258, 1707, 1858, 875, 45, 1430, 916, 800, 16, 1505, 168, 1847, 316, 1483, 880, 1116, 683, 286, 1132, 1713, 289, 1104, 262, 573, 1414, 1021, 385, 1694, 1029, 496, 1488, 858, 1420, 670, 1957, 1733, 1846, 1982, 919, 1301, 602, 513, 1154, 941, 2043, 370, 2036, 317, 1981, 282, 697, 1869, 1118, 1151, 289, 10, 2021, 745, 1047, 1269, 1570, 245, 1335, 1238, 1858, 288, 279, 1809, 1223, 116, 661, 338, 1657, 143, 1451, 1512, 1278, 1509, 1898, 993, 1838, 1549, 336, 1659, 1927, 1531, 781, 249, 757, 1015, 291, 1231, 1889, 1934, 1345, 1060, 1524, 788, 204, 1541, 208, 381, 1575, 454, 376, 219, 400, 1487, 1850, 897, 17, 1133, 144, 741, 781, 519, 1848, 241, 1845, 1405, 163, 382, 578, 1231, 1349, 1085, 549, 212, 1581, 2029, 920, 1715, 835, 1988, 835, 1734, 313, 202, 343, 244, 1447, 1703, 240, 338, 1690, 1732, 1202, 1023, 851, 1046, 1327, 1518, 668, 394, 704, 1054, 1852, 1257, 489, 931, 2018, 1767, 1151, 379, 1568, 326, 1355, 1602, 250, 1543, 95, 392, 1364, 949, 1943, 21, 1899, 1634, 17, 876, 1821, 259, 1317, 1487, 269, 1672, 676, 991, 751, 1264, 1294, 1161, 356, 1454, 685, 297, 1000, 435, 62, 759, 1969, 455, 802, 591, 2043, 350, 1007, 1349, 705, 503, 2034, 1780, 220, 286, 1951, 435, 822, 950, 1746, 471, 1900, 1785, 440, 260, 1551, 674, 556, 1764, 28, 1266, 615, 199, 1540, 909, 1496, 900, 882, 1084, 1005, 117, 98, 230, 778, 1319, 891, 1343, 1168, 1073, 910, 92, 1268, 1846, 439, 636, 1378, 916, 1346, 247, 743, 1019, 1756, 1116, 1104, 709, 756, 1886, 1349, 1254, 716, 1566, 405, 1024, 895, 270, 207, 1358, 1516, 810, 1022, 2031, 1044, 1876, 2029, 1570, 1089, 47, 1779, 235, 1459, 1888, 1937, 847, 653, 697, 1096, 1450, 1716, 1742, 1979, 1928, 1969, 71, 1388, 1440, 1499, 124, 1262, 574, 1740, 1326, 438, 1367, 1335, 1101, 2029, 1396, 319, 842, 1615, 952, 1888, 577, 1624, 1117, 549, 220, 11, 1843, 81, 358, 1218, 845, 531, 844, 578, 2003, 1884, 1551, 530, 244, 1834, 1840, 1831, 1150, 954, 509, 350, 1784, 1798, 910, 1146, 1442, 1009, 317, 1505, 1347, 761, 524, 448, 1676, 621, 1499, 1933, 1716, 948, 1542, 1382, 1786, 1532, 167, 1527, 9, 990, 1441, 1462, 984, 891, 1160, 1667, 919, 812, 1456, 293, 871, 1462, 982, 259, 313, 675, 1197, 1522, 458, 298, 913, 840, 1554, 222, 113, 797, 2039, 1267, 754, 1875, 1448, 1500, 967, 2001, 1456, 1562, 1090, 1777, 1024, 1186, 1128, 1635, 1172, 1059, 702, 58, 566, 446, 1046, 238, 1301, 1441, 651, 1556, 564, 1169, 1142, 1300, 1705, 1934, 108, 1324, 1502, 1142, 423, 839, 304, 466, 34, 1569, 1799, 1862, 1870, 1133, 244, 1842, 681, 214, 786, 200, 344, 1904, 1874, 1274, 1851, 290, 319, 1533, 560, 1883, 1801, 395, 1520, 866, 838, 577, 187, 1223, 611, 1611, 1874, 1302, 0, 1600, 1160, 1902, 593, 1978, 1077, 1160, 409, 535, 81, 1100, 1630, 786, 471, 1895, 179, 1460, 1798, 1338, 1611, 1605, 1020, 93, 1051, 391, 1078, 1011, 2041, 376, 46, 354, 875, 1395, 348, 954, 824, 1038, 1634, 1916, 1795, 286, 629, 377, 1530, 1600, 983, 1590, 193, 144, 581, 480, 1972, 1774, 1598, 1018, 888, 545, 296, 1920, 412, 1832, 1444, 1174, 1073, 1500, 692, 1616, 328, 251, 661, 1370, 1792, 769, 1757, 1704, 1552, 591, 1468, 1153, 1628, 414, 2044, 17, 202, 240, 609, 993, 618, 1291, 1915, 1044, 288, 967, 1586, 1695, 1213, 1317, 16, 659, 1561, 1155, 1052, 232, 1492, 337, 1559, 426, 137, 2031, 280, 1023, 2048, 1487, 798, 757, 1983, 107, 1007, 283, 69, 464, 365, 1283, 193, 1572, 269, 590, 172, 506, 1994, 1338, 1519, 223, 398, 1722, 1009, 921, 941, 200, 1394, 1055, 1400, 439, 1375, 562, 611, 223, 663, 424, 92, 814, 1165, 1878, 1342, 1837, 837, 1956, 1539, 370, 1449, 867, 2040, 767, 201, 1115, 548, 590, 1627, 1787, 194, 675, 246, 653, 1379, 486, 1387, 647, 490, 1569, 1952, 66, 297, 1637, 806, 1553, 339, 868, 1582, 595, 1722, 1515, 1735, 294, 465, 1482, 827, 355, 1524, 1939, 1729, 1107, 2005, 1287, 1896, 1638, 707, 306, 1625, 1680, 1106, 1192, 515, 553, 402, 1415, 123, 1350, 281, 719, 352, 1013, 451, 715, 21, 844, 912, 1173, 405, 557, 643, 1225, 1866, 635, 671, 1935, 57, 574, 281, 65, 1, 1299, 869, 1783, 724, 560, 1229, 941, 1675, 1731, 1812, 2014, 1826, 1248, 151, 712, 1406, 286, 1412, 540, 1809, 74, 349, 814, 1745, 811, 454, 358, 1840, 463, 389, 2005, 1959, 1600, 191, 773, 1675, 1975, 1119, 242, 2031, 931, 1753, 1318, 219, 1178, 1702, 166, 1613, 1837, 1600, 391, 1620, 227, 1292, 1789, 1217, 961, 1678, 1240, 306, 507, 1663, 423, 1541, 1362, 728, 603, 829, 259, 1478, 7, 191, 1226, 1825, 1725, 965, 1727, 1659, 757, 746, 223, 487, 1615, 304, 1034, 1919, 1005, 1109, 1017, 1784, 126, 1225, 281, 1479, 939, 157, 821, 819, 1567, 1890, 1655, 941, 785, 1839, 1374, 1402, 1924, 1122, 994, 823, 1021, 458, 508, 1525, 27, 1315, 913, 754, 8, 2040, 548, 561, 1469, 399, 1291, 1645, 480, 678, 1149, 1559, 1971, 1999, 118, 857, 1852, 1322, 2019, 278, 1387, 1486, 968, 1114, 1216, 1132, 838, 856, 640, 850, 472, 1798, 1751, 1726, 219, 1815, 1360, 155, 1212, 466, 570, 1910, 509, 1204, 1469, 1515, 1247, 1909, 830, 19, 1702, 501, 397, 1908, 1265, 406, 1726, 1546, 1403, 1272, 1612, 974, 1241, 51, 64, 797, 596, 550, 810, 812, 924, 326, 716, 1760, 38, 2047, 618, 662, 354, 1020, 495, 1785, 1627, 1174, 1373, 1910, 1652, 93, 26, 1058, 767, 5, 805, 425, 2008, 975, 1898, 1203, 1941, 557, 296, 1593, 1265, 90, 1733, 309, 768, 1819, 967, 63, 762, 1786, 362, 710, 1983, 1770, 1522, 874, 1638, 176, 673, 1926, 1100, 1338, 1026, 197, 1550, 1404, 1013, 698, 1489, 1233, 153, 1883, 1731, 922, 1563, 1945, 3, 187, 944, 836, 337, 334, 1793, 1919, 351, 1847, 341, 1858, 1940, 1068, 237, 1978, 1371, 1479, 1906, 353, 1129, 67, 865, 1110, 832, 814, 197, 798, 1057, 281, 1570, 80, 928, 234, 1830, 1757, 1946, 257, 777, 411, 221, 374, 1155, 860, 1790, 1561, 1970, 454, 842, 1400, 1816, 1320, 379, 2016, 827, 377, 1066, 1704, 494, 1820, 1827, 2043, 1550, 1951, 1443, 1163, 1778, 1998, 1774, 231, 557, 176, 54, 1159, 586, 753, 1906, 940, 1967, 964, 1938, 2021, 800, 1388, 1187, 1277, 733, 1536, 1462, 49, 1540, 398, 595, 1094, 483, 2009, 713, 804, 1370, 109, 1995, 1191, 270, 276, 1419, 1196, 235, 227, 294, 1334, 65, 963, 119, 936, 1457, 928, 1409, 797, 1091, 1715, 1389, 1038, 1115, 260, 1434, 1577, 1652, 0, 1067, 1954\012	} ;\012   // get index of the work item\012    int randIndex=get_global_id(0)&0x07FF;\012    int index = rand[randIndex];\012    // add the vector elements\012	#if INPUTS == 0\012	z[index]=index;\012	#elif INPUTS == 1\012    z[index] = x[index]; //+ y[index];\012	#elif INPUTS == 2\012    z[index] = x[index] + y[index];\012	#elif INPUTS == 3\012    z[index] = x[index] + y[index] + y1[index];\012	#elif INPUTS == 4\012    z[index] = x[index] + y[index] + y1[index] + y2[index];\012	#elif INPUTS == 5\012    z[index] = x[index] + y[index] + y1[index] + y2[index] + y3[index];\012	#elif INPUTS == 6 \012    z[index] = x[index] + y[index] + y1[index] + y2[index] + y3[index] + y4[index];\012	#elif INPUTS == 7\012    z[index] = x[index] + y[index] + y1[index] + y2[index] + y3[index] + y4[index] + y5[index];\012	#elif INPUTS == 8\012    z[index] = x[index] + y[index] + y1[index] + y2[index] + y3[index] + y4[index] + y5[index] + y6[index];\012	#elif INPUTS == 9\012    z[index] = x[index] + y[index] + y1[index] + y2[index] + y3[index] + y4[index] + y5[index] + y6[index] + y7[index];\012	#endif\012\012}\012\012\012"}];
