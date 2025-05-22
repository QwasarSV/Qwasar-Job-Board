#include <stdlib.h>
#include <curl/curl.h>
#include <curl/easy.h>

int main(){
    CURL *curl = curl_multi_init();
    if (curl){
        curl_version_info_data *ver = curl_version_info(CURLVERSION_NOW);
        printf("libcurl version %u.%u.%u\n",
            (ver->version_num >> 16) & 0xff,
            (ver->version_num >> 8) & 0xff,
            ver->version_num & 0xff);
    }
    return EXIT_SUCCESS;
}